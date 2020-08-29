function dateEnd(){
    let today = new Date();
    let deadline = new Date(2020, 07, 31, 11, 59, 0);

    if (today !== deadline){
        alert("submitted successfully")
    }

    else{
        alert("sorry registration closed bayii!");
    }
}