declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
// Add any other Swiper CSS modules you might import (e.g., autoplay, effect-fade)
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}
