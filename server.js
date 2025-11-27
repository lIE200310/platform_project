const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <style>
    body {
        margin: 0;
        padding: 0;
        font-family: Georgia, serif;
    }

    table {
        width: 100%;
        max-width: 2200px;
        margin: auto;
        border-collapse: collapse;
    }

    th {
        background-color: #8B4513;
        color: #FFE4B5;
        font-size: 2rem;
        padding: 20px;
        text-align: center;
    }

    .content {
        background-color: #FFDEAD;
        color: #A0522D;
        text-align: center;
        padding: 40px 20px;
        min-height: 78vh;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
    }

    .pop {
        opacity: 0;
        transform: scale(0.5);
        animation: popUp 0.8s ease forwards;
    }

    @keyframes popUp {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .content h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    .content p {
        font-size: 1.5rem;
        line-height: 1.6;
    }

    tfoot td {
        text-align: center;
        padding: 12px;
        font-size: 1rem;
        background-color: white;
    }
</style>

</head>
<body>

<table border="1">
    <tr>
        <th colspan="2">My Application</th>
    </tr>

<tr>
    <td class="content">
        <h1 class="pop">ABELES, LIERA V. <br> NT-4101</h1>
        <p id="quote" style="animation-delay: 0.9s;" class="pop"></p>
    </td>
</tr>

</table>

<script>
    const quotes = [
		"<i>Just give up!<br></i> CHARRR ",
        "<i><br>Believe in me?</i> ",
        "<br> ETO NA TALAGA!",
		"<i>GANDA MO ALLY.</i>",
    ];

    const quoteElement = document.getElementById("quote"); 
    let index = 1;

    function changeQuote() {
    
        quoteElement.classList.remove("pop");

        setTimeout(() => {
        
            quoteElement.innerHTML = quotes[index];
            index = (index + 1) % quotes.length;

        
            quoteElement.classList.add("pop");
        }, 100);
    }
       quoteElement.innerHTML = quotes[0];

    
    setInterval(changeQuote, 3000);
</script>  
</body>
    `);
    res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});