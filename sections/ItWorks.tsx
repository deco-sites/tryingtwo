import { h } from "preact";

const ImageWithTitle = ({ title = "A Beautiful Sunny Day", className = "", backgroundColor = "bg-blue-500" }) => (
  <div class={`relative ${className} ${backgroundColor}`}>
    <div class="absolute inset-0 flex justify-center items-center">
      <h1 class="text-white text-4xl font-bold text-center">{title}</h1>
    </div>
  </div>
);

export default ImageWithTitle;