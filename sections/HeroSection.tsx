import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The main title text.
   * @format textarea
   */
  title?: string;
  /**
   * @description The background color of the hero section.
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The background image of the hero section.
   */
  backgroundImage?: ImageWidget;
}

export default function Hero({ 
  title = "I am trying", 
  backgroundColor = "#4F46E5",
  backgroundImage
}: Props) {
  return (
    <section class="bg-cover bg-center py-20" style={{
      backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  )
}