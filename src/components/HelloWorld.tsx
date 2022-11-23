import { defineComponent } from "vue";

const helloWorld = defineComponent({
  props: {
    msg: String,
  },
  render() {
    return (
      <div className="flex flex-col">
        <h1 className="green text-2xl">Hellow TSX</h1>
        <div>{this.msg} SID</div>
        <div className="nest text-red-500">RED</div>
      </div>
    );
  },
});

export default helloWorld;
