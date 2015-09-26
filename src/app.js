class ColorPickerApp extends React.Component {

  constructor(params) {
    super(params);
    this.state = this._parseColorString('#ff6699');
  }

  _parseColorString(value = '') {
    var value = value.toUpperCase();

    if (value.match(/#[0-9A-F]{6}/i)) {
      var [
        match,
        rStr,
        gStr,
        bStr
      ] = value.match(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i);

      return {
        color: match,
        r: parseInt(rStr, 16),
        g: parseInt(gStr, 16),
        b: parseInt(bStr, 16),
      };

    }
    return {};
  }

  _getInputVal() {
    return this.refs
      .colorInput
      .getDOMNode()
      .value
      .toUpperCase();
  }

  changeColor() {
    var colorObj = this._parseColorString(this._getInputVal());
    this.setState(colorObj);
  }

  render() {
    var {
      message,
      color,
      r,
      g,
      b,
    } = this.state;

    return (
      <div>
        <div>
          <input
            ref='colorInput'
            onChange={this.changeColor.bind(this)}
            placeholder='eg. #ff6699'
            defaultValue='#ff6699'
          />
          <ColorPrinter {...this.state}/>
        </div>
      </div>
    );
  }
}

class ColorPrinter extends React.Component {
  render() {

    var {
      color,
      r,
      g,
      b,
    } = this.props;

    return (
      <div>
        <h4>Current color: { color }</h4>
        <div
          className='box'
          style={{
            backgroundColor: color,
          }}
        />
        <div className='code'>
          HEX: { color }
        </div>
        <div className='code'>
          RGB: { `rgb(${r},${g},${b})` }
        </div>
      </div>
    );
  }
}

React.render(<ColorPickerApp name="John" />, document.getElementById('colorPicker'));
