const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <style>
    body {
        height: 100%;
        margin: 0;
        font-family: Georgia, serif;
        background-color: #FFE4B5;
    }

    
    table {
        width: 100%;
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
    
        color: #A0522D;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 160px 20px;
        text-align: center;
    }

    .pop {
        opacity: 0;
        transform: scale(0.5);
        animation: popUp 0.8s ease forwards;
    }

    @keyframes popUp {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }

    .content h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    .content p {
        font-size: 1.5rem;
        line-height: 1.6;
    }

</style>

</head>
<body>


<table border="1">
    <tr>
        <th>My Application</th>
    </tr>
</table>


<div class="content">
    <h1 class="pop">ABELES, LIERA V. <br> NT-4101</h1>
    <p id="quote" style="animation-delay: 0.9s;" class="pop"></p>
</div>


<script>
    const quotes = [
        "<i>Just give up!<br></i> CHARRR",
        "<br>MY INSPIRATIONAL QUOTE:",
        "<i>God has a plan.<br>TRUST IT, LIVE IT, ENJOY IT.</i>"
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