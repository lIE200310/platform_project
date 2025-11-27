const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <table border = " 5px">
	   <form>
		<th colspan = "2" width = "1500px" height = "100px" style = "font-size: 20px; color: #FFE4B5;" >
		<style>
			th {
			background-color: #8B4513;
			}
		</style>
			<center><h1> My Website</h1> </th>
		   <tr> 
			<td width = "200px" height = "295px" style = "font-size: 15px; color: #A0522D;" ><center> 
		<style>
			td {
			background-color: #FFDEAD;
			}
		</style>	
			<h1> Home </h1> </td>
			<td rowspan = "2" style = "font-size: 30px; color: #A0522D;"> <center>
				<h1>REST</h1>
					<p>Merely want something,
					<br/>Simply longing for a rest.
					<br/>A quiet, long one
					<br/>Where no one's gonna disturb
					<br/>Thinking only peaceful things.
					<br/><i>- Liera Abeles</i></p>
			</td>
		   </tr>
		   <tr>
			<td width = "200px" height = "245px" style = "font-size: 15px; color: #A0522D;"> <center> 
			<h1>About us</h1> </td>
		   </tr>
		<tfoot>
		   <tr>
			<td colspan = "2"> <center> All Right Reserved 2024 </td>
		   </tr>
</form>
</table>
    `);
    res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});