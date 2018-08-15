export default class Greeting {
  constructor(props) {
    this.name = props.name;
  }
  cheers() {
    console.log(`Cheers ${this.name} :)`);
  }
}