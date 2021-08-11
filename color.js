var Links = {
    setColor: function (color) {
    //     var alist = document.querySelectorAll('a');
    //     for (var i = 0; i < alist.length; i++) {
    //         alist[i].style.color = color;
    //     }
        $('a').css('color',color);
    }
}

var Body = {
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    },
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('Color',color);
    }    
}

function day_night(self) {
    if (self.value == 'night') {
        Body.setBackgroundColor('gray');
        Body.setColor('white');
        Links.setColor('rgb(15, 15, 94)');
        self.value = 'day';
    } else {
        Body.setBackgroundColor('');
        Body.setColor('black');
        Links.setColor('brown');
        self.value = 'night';
    }
}