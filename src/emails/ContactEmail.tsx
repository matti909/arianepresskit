import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  nombreCompleto: string;
  ciudad: string;
  mensaje: string;
}

export function ContactEmail({ nombreCompleto, ciudad, mensaje }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={h1}>Nueva Consulta de Booking</Heading>
            
            <Text style={text}>
              Has recibido una nueva consulta a través del formulario de contacto de tu sitio web.
            </Text>

            <Hr style={hr} />

            <Section style={informationTable}>
              <Text style={informationTableLabel}>Nombre Completo:</Text>
              <Text style={informationTableValue}>{nombreCompleto}</Text>
            </Section>

            <Section style={informationTable}>
              <Text style={informationTableLabel}>Ciudad:</Text>
              <Text style={informationTableValue}>{ciudad}</Text>
            </Section>

            <Section style={informationTable}>
              <Text style={informationTableLabel}>Mensaje:</Text>
              <Text style={informationTableValue}>{mensaje}</Text>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              Este email fue enviado desde el formulario de contacto de arianepresskit.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};

const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
  marginTop: "12px",
  padding: "12px",
};

const informationTableLabel = {
  ...text,
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 4px 0",
};

const informationTableValue = {
  ...text,
  fontSize: "14px",
  margin: "0 0 12px 0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};