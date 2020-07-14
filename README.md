# React component
self-defined components using propsTyps &amp; forEach loop&amp; transferPropsTo


# func


html tag 或稱元件或元素，提供了 onChange 方法，因為它是一個函數，所以透過 val: this.state.defaultVal 儲存了 defaultVal。

    kHandler: function(ev){

        if(this.state.onChange){
            this.state.onChange(ev);
        }

        this.setState(val: ev.target.value);

    },
    
        getInitialState: function(){

        rerurn { val: this.state.defaultVal} ;


    }, 
    
    
    
 
