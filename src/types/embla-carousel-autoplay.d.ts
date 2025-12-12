declare module 'embla-carousel-autoplay' {
  import { CreatePluginType } from 'embla-carousel';
  
  interface AutoplayOptions {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    stopOnLastSnap?: boolean;
    rootNode?: (emblaRoot: HTMLElement) => HTMLElement;
  }

  function Autoplay(options?: AutoplayOptions): CreatePluginType;
  
  export default Autoplay;
}
