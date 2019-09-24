import skinSelectedImg from "../media/anatomy/skin.png";
import skeltonSelectedImg from "../media/anatomy/skelton.png";
import muscularSelectedImg from "../media/anatomy/muscular.png";
import nervousSelectedImg from "../media/anatomy/nervous.png";
import circulatorySelectedImg from "../media/anatomy/circulatory.png";
import respiratorySelectedImg from "../media/anatomy/respiratory.png";
import digestiveSelectedImg from "../media/anatomy/digestive.png";

import skinImg from "../media/anatomy/skin_Y.png";
import skeltonImg from "../media/anatomy/skelton_Y.png";
import muscularImg from "../media/anatomy/muscular_Y.png";
import nervousImg from "../media/anatomy/nervous_Y.png";
import circulatoryImg from "../media/anatomy/circulatory_Y.png";
import respiratoryImg from "../media/anatomy/respiratory_Y.png";
import digestiveImg from "../media/anatomy/digestive_Y.png";

// Hover images
import skinHoverImg from "../media/anatomy/skin_B.png";
import skeltonHoverImg from "../media/anatomy/skelton_B.png";
import muscularHoverImg from "../media/anatomy/muscular_B.png";
import nervousHoverImg from "../media/anatomy/nervous_B.png";
import circulatoryHoverImg from "../media/anatomy/circulatory_B.png";
import respiratoryHoverImg from "../media/anatomy/respiratory_B.png";
import digestiveHoverImg from "../media/anatomy/digestive_B.png";

const organs = [
  "Skin",
  "Bone",
  "Muscles",
  "Nervous",
  "Heart",
  "Lungs",
  "Stomach",
  "Eyes",
  "Liver",
  "Brain",
  "Urinery",
  "Kidney"
];

export const organsOfFrog = () => {
  return organs.reduce((acc, obj) => {
    return {
      ...acc,
      [obj]: obj
    };
  }, {});
};

export const anatomyConfig = [
  {
    id: "Skin",
    displayName: "Skin",
    image: skinImg,
    hoverImg: skinHoverImg,
    selectedImg: skinSelectedImg,
    asName: ["frog_skin", "frog_eyes"]
  },
  {
    id: "Skeleton",
    displayName: "Skelton",
    image: skeltonImg,
    hoverImg: skeltonHoverImg,
    selectedImg: skeltonSelectedImg,
    asName: ["frog_skeleton"]
  },
  {
    id: "Muscles",
    displayName: "Muscles",
    image: muscularImg,
    hoverImg: muscularHoverImg,
    selectedImg: muscularSelectedImg,
    asName: ["frog_muscles__01", "frog_muscles_02"]
  },
  {
    id: "Nervous",
    displayName: "Nervous",
    image: nervousImg,
    hoverImg: nervousHoverImg,
    selectedImg: nervousSelectedImg,
    asName: ["frog_yellow_nervous", "frog_brain"]
  },
  {
    id: "Heart",
    displayName: "Circulatory",
    image: circulatoryImg,
    hoverImg: circulatoryHoverImg,
    selectedImg: circulatorySelectedImg,
    asName: ["frog_heart", "frog_blue_nervous", "frog_red_nervous"]
  },
  {
    id: "Lungs",
    displayName: "Respiratory",
    image: respiratoryImg,
    hoverImg: respiratoryHoverImg,
    selectedImg: respiratorySelectedImg,
    asName: ["frog_lungs"]
  },
  {
    id: "Stomach",
    displayName: "Digestive",
    image: digestiveImg,
    hoverImg: digestiveHoverImg,
    selectedImg: digestiveSelectedImg,
    asName: [
      "frog_pancreas",
      "frog_urinary_02",
      "frog_urinary_01",
      "frog_gallbladder",
      "frog_kidney_part_02",
      "frog_kidney_part_01",
      "frog_stomach",
      "frog_small_intestine",
      "frog_liver",
      "frog_kidney"
    ]
  }
];
export const partNames = {
  frog_lungs: "Lungs",
  frog_kidney_part_02: "Kidney",
  frog_skeleton: "Skeleton",
  frog_urinary_02: "Urinary Bladder",
  frog_brain: "Brain",
  frog_kidney_part_01: "Kidney",
  frog_yellow_nervous: "Yellow Nervous",
  frog_pancreas: "Pancreas",
  frog_muscles_02: "Muscles",
  frog_stomach: "Stomach",
  frog_skin: "Skin",
  frog_small_intestine: "Small Instestine",
  frog_urinary_01: "Ureter",
  frog_liver: "Liver",
  frog_gallbladder: "Gallbladder",
  frog_heart: "Heart",
  frog_red_nervous: "Red Nervous",
  frog_kidney: "Kidney",
  frog_muscles__01: "Muscles",
  frog_eyes: "Eye",
  frog_blue_nervous: "Blue Nervous"
};

export default anatomyConfig;
