let styling = `
	* {
		padding: 0;
		border-radius: 0;
		font-family: sans-serif;
	}
	body {
		background: #f1f1f1;
	}
	input {
		border-radius: 0;
		padding: 20px;
		width: 50%;
		font-family: sans-serif;
		font-weight: 400px;
		border-color: transparent;
		box-shadow: 3px 2px 3px rgba(0, 0, 0, .7);
		align-content: center;
		margin-left: 23%;
		color: #262626;
		text-shadow: 2px 2px 2px rgba(0, 0, 0, .7);
		font-weight: 300px;
		text-align: center;
	}
	.text-center {
		color: #fff;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, .7);
		font-weight: bold;
		font-size: 200%;
		width: 500px;
		margin: auto;
		text-align: center;
	}
	.btn {
		margin-left: 30px;
		padding: 20px;
		width: 300px;
		border-radius: 0;
		border-color: transparent;
		box-shadow: 2px 3px 2px rgba(0, 0, 0, .7);
		color: #fff;
		text-shadow: 1px 2px 1px rgba(0, 0, 0, .7);
	}
	.btn-primary {
		background: blue;
	}
	.btn-success {
		background: green;
	}
	.divCenter {
		align-content: center;
		margin-top: 4%;
		margin-left: 25%;
	}
	textarea {
		border-radius: 0;
		background: #f1f1f1;
		color: #262626;
		box-shadow: 2px 3px 2px rgba(0, 0, 0, .7);
		content-align: center;
		width: 30%;
		height: 150px;
		margin-top: 20px;
		margin-left: 34%;
	}
`;
document.body.innerHTML += "<style>" + styling.trim() + "</style>";
// FrameWorkIn Using
// Global Function

// Variable
let IsAccess = false;

var div = document.createElement("div");
div.setAttribute("class", "text-center");

var h1 = document.createElement("h1");
h1.textContent = `Scan You Code Bart In Here`;

div.append(h1);

var Input = document.createElement("input");
let TextBoxConsole = document.createElement('textarea');
TextBoxConsole.setAttribute("readonly", "on");



// Button Input And Clear
let divInput = document.createElement('div');
let ButtonInput = document.createElement("button");
let ButtonClear = document.createElement('button');

divInput.setAttribute('class', "divCenter");

ButtonInput.setAttribute('class', "inputButton btn btn-primary");
ButtonClear.setAttribute('class', "inputClear btn btn-success");

ButtonInput.textContent = "Start (0/13)";
ButtonClear.textContent = "Clear";

divInput.append(ButtonInput);
divInput.append(ButtonClear);

// End Variable
window.addEventListener('load', function() { // Make Function Start In Window
	Input.setAttribute("class", "getInput");
	document.body.appendChild(div);
	Input.setAttribute("type", "number");
	document.body.appendChild(Input);
	document.body.appendChild(divInput);
	document.body.appendChild(TextBoxConsole);
});

ButtonInput.addEventListener('click', function(){
	if(IsAccess != false)
	{
		//            0   1   2   3 \\
		let Vector = [[], [], [], []];
		let temps1 = 0;
		let Vector1 = [[], []];

		Vector[0].push(...Input.value);
		for(let i = 0; i < Vector[0].length; i++)
		{
			Vector[1].push(parseInt(Vector[0][i]));
			TextBoxConsole.value += `Push Data (${parseInt(Vector[0][i])}) \n`;
		}
		TextBoxConsole.value += `Check Data (${Vector[0]}) \n`;
		
		// Working To (2)
		Vector[2].push(Vector[1][0]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][0])}) \n`;
		Vector[2].push(Vector[1][2]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][2])}) \n`;
		Vector[2].push(Vector[1][4]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][4])}) \n`;
		Vector[2].push(Vector[1][6]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][6])}) \n`;
		Vector[2].push(Vector[1][8]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][8])}) \n`;
		Vector[2].push(Vector[1][10]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][10])}) \n`;

		Vector[3].push(Vector[1][1]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][1])}) \n`;
		Vector[3].push(Vector[1][3]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][3])}) \n`;
		Vector[3].push(Vector[1][5]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][5])}) \n`;
		Vector[3].push(Vector[1][7]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][7])}) \n`;
		Vector[3].push(Vector[1][9]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][9])}) \n`;
		Vector[3].push(Vector[1][11]);
		TextBoxConsole.value += `Push Data (${parseInt(Vector[1][11])}) \n`;

		let EndBart = Vector[1][12];
		TextBoxConsole.value += `Check Data (${EndBart}) \n`;

		var template = 0;
		for(let i = 0; i < Vector[2].length; i++)
		{
			template += Vector[2][i];
			TextBoxConsole.value += `Push Data (${template}) \n`;
		}
		template = template * 3 + "";
		Vector1[0].push(...template);
		TextBoxConsole.value += `Check Data (${Vector1[0]}) \n`;



		template = 0;
		for(let i = 0; i < Vector[3].length; i++)
		{
			template += Vector[3][i];
			TextBoxConsole.value += `Push Data (${template}) \n`;
		}
		template = template + "";
		Vector1[1].push(...template);
		TextBoxConsole.value += `Push Data (${Vector1[1]}) \n`;

		let templatesing = [];
		template = parseInt(Vector1[0].length - 1);
		templatesing.push(parseInt(Vector1[0][template]));
		template = parseInt(Vector1[1].length - 1);
		templatesing.push(parseInt(Vector1[1][template]));

		TextBoxConsole.value += `CheckData Data (${templatesing}) \n`;

		template = 0;
		for(let i = 0; i < templatesing.length; i++)
		{
			template += parseInt(templatesing[i]);
			TextBoxConsole.value += `Push Data (${template}) \n`;
		}
		template = template + "";

		let thinking = [];
		thinking.push(...template);
		TextBoxConsole.value += `Push Data (${thinking}) \n`;

		template = thinking.length - 1;

		if((EndBart + parseInt(thinking[template])) == 10)
		{
			ButtonInput.textContent = `Start (True Answer)`;
			TextBoxConsole.value += `Finish \n`;
			TextBoxConsole.value += `True Answe \n`;
		} else {
			ButtonInput.textContent = `Start (False Answer)`;
			TextBoxConsole.value += `Finish \n`;
			TextBoxConsole.value += `False Answer \n`;
		}
	}
});

Input.addEventListener('keydown', () => {
	let result = Input.value;
	if(result.length == 13)
	{
		Input.setAttribute('readonly', 'on');
		ButtonInput.textContent = `Start (${result.length}/13)`;
		IsAccess = true;
	} else {
		ButtonInput.textContent = `Start (${result.length}/13)`;
	}
});

ButtonClear.addEventListener('click', () => {
	window.location.href = window.location.href;
});
