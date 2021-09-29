let loc =document.getElementById('location');
let tempicon =document.getElementById('temp-icon');
let tempvalue =document.getElementById('temp-value');
let climate =document.getElementById('climate');


let iconfile;


const searchInput=document.getElementById('search-input');
const searchButton=document.getElementById('search-button');


/*City Location Code*/

searchButton.addEventListener('click',(e)=>
{

	e.preventDefault();
	getWeather(searchInput.value);
	searchInput.value='';

});


 const getWeather=async (city)=>
 {
 	try{

 		const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4aad600c61296adbc67094bfb264ac05`,
 		{mode:'cors' 		

 	});

 		const weatherData =await response.json();
 		console.log(weatherData);

 		const{name} =weatherData;
 		const{feels_like}=weatherData.main;
 		const{id,main}=weatherData.weather[0];

 		loc.textContent=name;
 		climate.textContent=main;
 		tempvalue.textContent=Math.round(feels_like-273);


 		if(id<300 && id>200)
			{
				tempicon.src="icons8-thunderstorm-64.png"
			}
			else if(id<400 && id>300)
			{
				tempicon.src="weather.png"
			}

			 else if(id<600 && id>500)
			{
				tempicon.src="weather.png"
			}
			else if(id<700 && id>600)
			{
				tempicon.src="snow.png"
			}

			else if(id<800 && id>700)
			{
				tempicon.src="cloudy (2).png"
			}
			else if(id==800)
			{
				tempicon.src="clouds-and-sun.png"
			}



 		
 	}

catch(error)
{
	alert('City not found')
}
 	
 };
 		




/*City Location Code*/



window.addEventListener('load',()=>{

let long;
let lat;
const proxy="https://cors-anywhere.herokuapp.com/";

if(navigator.geolocation){

	navigator.geolocation.getCurrentPosition((Position)=>

{
		long=Position.coords.longitude;
		lat=Position.coords.latitude;


		const api= ` ${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4aad600c61296adbc67094bfb264ac05   `

		fetch(api).then((response)=> {


			return response.json();

		})

		.then(data =>
		{

			const{name}=data;
			const{feels_like}=data.main;
			const{id,main}=data.weather[0];

			loc.textContent=name;
			climate.textContent=main;
			tempvalue.textContent=Math.round(feels_like-273);

			if(id<300 && id>200)
			{
				tempicon.src="icons8-thunderstorm-64.png"
			}
			else if(id<400 && id>300)
			{
				tempicon.src="weather.png"
			}

			 else if(id<600 && id>500)
			{
				tempicon.src="weather.png"
			}
			else if(id<700 && id>600)
			{
				tempicon.src="snow.png"
			}

			else if(id<800 && id>700)
			{
				tempicon.src="cloudy (2).png"
			}
			else if(id==800)
			{
				tempicon.src="clouds-and-sun.png"
			}



			console.log(data);


		})


}


		)}

})




