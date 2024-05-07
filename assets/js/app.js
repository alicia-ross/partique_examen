class Star {
    constructor(name,age,color,galaxy,distance){
        this.name=name;
        this.age=age;
        this.color=color;
        this.galaxie=galaxy;
        this.distance=distance;
    }


    toHtml() {
        const starElement = document.createElement('div');
        starElement.classList.add('star');
    
        const nameElement = document.createElement('h2');
        nameElement.textContent = this.name;
    
        const ageElement = document.createElement('p');
        ageElement.textContent = this.age;
    
        const colorElement = document.createElement('p');
        colorElement.textContent = this.color;
    
        const galaxyElement = document.createElement('p');
        galaxyElement.textContent = this.galaxie;
    
        const distanceElement = document.createElement('p');
        distanceElement.textContent = this.distance;
    
        starElement.appendChild(nameElement);
        starElement.appendChild(ageElement);
        starElement.appendChild(colorElement);
        starElement.appendChild(nameElement);
        starElement.appendChild(galaxyElement);
        starElement.appendChild(distanceElement);
    
        return starElement;
    }
}

const stars= [
    new Star("45IR1",690000,"#F4F6F4","Andromeda",100054),
    new Star("45IR2",680000,"#F4F5F4","Andromeda",100353),
    new Star("45IR3",670000,"#F4F4F4","Andromeda",100454),
    new Star("45IR4",660000,"#F4F3F4","Andromeda",100554),
    new Star("45IR5",650000,"#F4F2F4","Andromeda",100654),
    new Star("45IR6",640000,"#F4F1F4","Andromeda",100754),
    new Star("45IR7",630000,"#F4F0F4","Andromeda",100854),
];

stars.forEach((star) => {
    document.body.appendChild(star.toHtml());
});


console.log(stars);