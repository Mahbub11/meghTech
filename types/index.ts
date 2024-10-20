import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type TParagraphProps = {
    paragraph: string;
};

export type TWordProps = {
    children: string;
    progress: MotionValue<number>;
    range: number[];
};

export type TperspectiveTextProps = {
    children: React.ReactNode;
};


export type TmodalProps = {
    modal: {
        active: boolean;
        index: number;
    };
    projects: {
        img: StaticImageData;
        color: string;
    }[];
};

export type TprojectProps = {
    title: string,
    index: number,
    setModal: (modal: { active: boolean; index: number; }) => void;
    href: string;
};

export type TlogoMarqueeProps = {
    children: React.ReactNode;
    baseVelocity: number;
};

export type TtextHoverProps = {
    title1: string;
    subTitle1: string;
    title2: string;
    subTitle2: string;
};

export type TparallaxProps = {
    images: string[];
    y: MotionValue<number>;
};

export type TbuttonProps = {
    toggleMenu: () => void,
    isActive: boolean;
};

export type TnavProps = {
    toggleMenu: () => void,
};

export type TperspectiveTextMenuProps = {
    label: string;
};

export type TRoundedProps = {
    children: React.ReactNode;
    className?: string;
    backgroundColor: string;
 };
 export type TButtonProps = {
    title: string;
    href: string;
 };

 export type TLinkHoverProps = {
    title: string;
    href: string;
    className?: string;
 };