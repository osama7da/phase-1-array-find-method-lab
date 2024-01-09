 function superbowlWin(win){
        const found = win.find((element) => element.result === "W")
        return found ? found.year : undefined
    }
