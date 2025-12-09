const codes = document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((num ,index) => {

	num.addEventListener("input",(e) => {
		const value = e.target.vahttps://www.svgrepo.com/show/345221/three-dots.svglue;
		if(!/^[0-9]$/.test(value)){
			e.target.value = "";
			return;
		}
		if(index < codes.length - 1){
			codes[index + 1].focus();
		}
	});

	num.addEventListener("keydown" ,(e) => {
		if(e.key === "Backspace"){
			if(num.value === ""){
				if(index > 0){
					codes[index - 1].value = "";
					codes[index - 1].focus();
				}
			}
			else{
				num.value = "";
			}
		}
	});
});