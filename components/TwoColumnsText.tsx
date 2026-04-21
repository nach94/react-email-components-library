import {
    Section,
    Row,
    Column,
} from 'react-email';

interface TwoColumnsTextProps {
    column1Content: React.ReactNode;
    column2Content: React.ReactNode;
    column1Position: 'left' | 'right';
    sectionPadding?: string | number;
    sectionBackgroundColor?: string;
    column1Width?: string;
    column2Width?: string;
    column1Padding?: string | number;
    column2Padding?: string | number;
}

export const TwoColumnsText = ({
    column1Content,
    column2Content,
    column1Position,
    sectionPadding,
    sectionBackgroundColor,
    column1Width,
    column2Width,
    column1Padding,
    column2Padding,
}: TwoColumnsTextProps) => {
    const column1 = (
        <Column style={{ width: column1Width, padding: column1Padding }}>
            {column1Content}
        </Column>
    );

    const column2 = (
        <Column style={{ width: column2Width, padding: column2Padding }}>
            {column2Content}
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
                {column1Position === 'left' ? (
                    <>
                        {column1}
                        {column2}
                    </>
                ) : (
                    <>
                        {column2}
                        {column1}
                    </>
                )}
            </Row>
        </Section>
    );
};