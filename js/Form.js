class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("H3")
    }
    display(){
        var title = createElement("H1")
        title.html("CAR RACE")
        title.position(130,0)
        
        this.input.position(130,160)

        this.button.position(250,200)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value()
            playerCount +=1
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("hello "+player.name)
            this.greeting.position(130,130)
        })
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}
