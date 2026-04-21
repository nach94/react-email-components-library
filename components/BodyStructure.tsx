import {
    Body,
    Container,
    Head,
    Html,
    Preview,
} from '@react-email/components';

interface BodyStructureProps {
    previewText?: string;
    fontFamily?: string;
    children?: React.ReactNode;
}

export const BodyStructure = ({ previewText, fontFamily, children }: BodyStructureProps) => {
    return (
        <Html style={{ fontFamily }}>
            <Head />
            <Preview>{previewText}</Preview>
            <Body>
                <Container>
                    {children}
                </Container>
            </Body>
        </Html>
    );
}