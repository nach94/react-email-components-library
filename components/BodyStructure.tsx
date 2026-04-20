import {
    Body,
    Container,
    Head,
    Html,
    Preview,
} from 'react-email';

interface BodyStructureProps {
    previewText?: string;
    children?: React.ReactNode;
}

export const BodyStructure = ({ previewText, children }: BodyStructureProps) => {
    return (
        <Html>
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