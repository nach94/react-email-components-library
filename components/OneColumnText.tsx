import {
    Section,
    Row,
    Column,
} from '@react-email/components';

interface OneColumnTextProps {
    children: React.ReactNode;
    sectionPadding?: string | number;
    sectionBackgroundColor?: string;
    columnWidth?: string;
    columnPadding?: string | number;
    textAlign?: 'left' | 'center' | 'right';
}

export const OneColumnText = ({
    children,
    sectionPadding,
    sectionBackgroundColor,
    columnWidth,
    columnPadding,
    textAlign,
}: OneColumnTextProps) => {
    return (
        <Section
            style={{
                padding: sectionPadding,
                backgroundColor: sectionBackgroundColor,
            }}
        >
            <Row>
                <Column style={{
                    width: columnWidth,
                    padding: columnPadding,
                    textAlign: textAlign
                }}>
                    {children}
                </Column>
            </Row>
        </Section>
    );
};
