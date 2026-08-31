import { CinematicPortfolio } from "../cinematic/cinematic-portfolio";
import { content } from "./constants";
import scene from "./scene.png";

export function HarborPortfolio() {
  return (
    <CinematicPortfolio
      content={{
        ...content,
        scene: { src: scene, alt: content.scene.alt },
      }}
    />
  );
}
