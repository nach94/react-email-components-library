import {
    Section,
    Row,
    Column,
    Img,
} from 'react-email';

interface EmailHeaderProps {
    logoSrc: string;
    logoAlt?: string;
    logoWidth?: string | number;
    logoHeight?: string | number;
    backgroundColor?: string;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
}

export const EmailHeader = ({
    logoSrc,
    logoAlt,
    logoWidth,
    logoHeight,
    backgroundColor,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
}: EmailHeaderProps) => {
    return (
        <Section style={{
            backgroundColor: `${backgroundColor}`,
            padding: `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
        }}
        >
            <Row>
                <Column>
                    <Img
                        src={logoSrc}
                        alt={logoAlt}
                        width={logoWidth}
                        height={logoHeight}
                        style={{
                            margin: '0 auto',
                            display: 'block',
                        }}
                    />
                </Column>
            </Row>
        </Section>
    );    
};
