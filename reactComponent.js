// 2020, 7/14, PM 12:10 - 12:40 (durantion: 30 mins)
// do a Component
// using propTypes

var React = require("react")
var KsCompo = React.createClass(
              //{onChange: React.PropTypes.func}
    propTypes:{onChange: React.propTypes.function},

    getInitialState: function(){

        rerurn { val: this.state.defaultVal} ;


    }, 

    kHandler: function(ev){

        if(this.state.onChange){
            this.state.onChange(ev);
        }

        this.setState(val: ev.target.value);

    },

    render: function(){

        var children = {};
        var val = this.state.value; // or this.props.value;

        // forEach loop param1 is child: any, param 2 is callback of fun(child: any, index: num)
        React.Children.forEach(this.state.children, function(child, i){

            var label = 
                <label>
                    <input
                        type="ksCompo"
                        name = {this.state.name}
                        value = {child.state.val}
                        checked = {this.state.val == val}
                        onChange = {this.state.kHandler}
                    />
                    
                    {child.state.children}         

                    <br/>
                </label>;

                children[i] = label;

            
        }.bind(this));

        // div 層 span 行
    return this.transferPropsto(<span>{children}</span>)

    }

);
