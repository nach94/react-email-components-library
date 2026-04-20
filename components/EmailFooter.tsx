import {
    Section,
    Row,
    Column,
    Link,
    Img,
} from 'react-email';

interface LogoItem {
    src: string;
    alt: string;
    href: string;
}

interface EmailFooterProps {
    logos: LogoItem[];
    backgroundColor?: string;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    logoHeight?: string | number;
    marginRight?: string | number;
}

export const EmailFooter = ({
    logos,
    backgroundColor,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    logoHeight,
    marginRight,
}: EmailFooterProps) => {
    return (
        <Section
            style={{
                backgroundColor,
                padding: `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
                textAlign: 'center',
            }}
        >
            <Row>
                <Column style={{textAlign: 'center'}}>
                    <div>
                        {logos.map((logo, index) => (
                            <Link
                                key={logo.src}
                                href={logo.href}
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    marginRight: index < logos.length - 1 ? marginRight : 0,
                                }}
                            >
                                <Img
                                    src={logo.src}
                                    alt={logo.alt}
                                    height={logoHeight}
                                    width="auto"
                                    style={{
                                        display: 'block',
                                    }}
                                />
                            </Link>
                        ))}
                    </div>
                </Column>
            </Row>
        </Section>
    );
};
