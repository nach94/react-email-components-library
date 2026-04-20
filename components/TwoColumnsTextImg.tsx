import {
    Section,
    Row,
    Column,
    Img,
} from 'react-email';

interface TwoColumnsTextImgProps {
    imageSrc: string;
    imageAlt: string;
    imageWidth?: string | number;
    imageHeight?: string | number;
    imagePosition: 'left' | 'right';
    children: React.ReactNode;
    sectionPadding?: string | number;
    sectionBackgroundColor?: string;
    imageColumnWidth?: string;
    textColumnWidth?: string;
    imageColumnPadding?: string | number;
    textColumnPadding?: string | number;
}

export const TwoColumnsTextImg = ({
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    imagePosition,
    children,
    sectionPadding,
    sectionBackgroundColor,
    imageColumnWidth,
    textColumnWidth,
    imageColumnPadding,
    textColumnPadding,
}: TwoColumnsTextImgProps) => {
    const imageColumn = (
        <Column style={{ width: imageColumnWidth, padding: imageColumnPadding }}>
            <Img
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{
                    width: `${imageWidth}`,
                    height: `${imageHeight}`,
                    display: 'block',
                }}
            />
        </Column>
    );

    const textColumn = (
        <Column style={{ width: textColumnWidth, padding: textColumnPadding }}>
            {children}
        </Column>
    );

    return (
        <Section
            style={{
                padding: sectionPadding,
                backgroundColor: sectionBackgroundColor,
            }}
        >
            <Row>
                {imagePosition === 'left' ? (
                    <>
                        {imageColumn}
                        {textColumn}
                    </>
                ) : (
                    <>
                        {textColumn}
                        {imageColumn}
                    </>
                )}
            </Row>
        </Section>
    );
};
