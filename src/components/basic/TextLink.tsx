import React from "react";
import styled, { css } from "styled-components";
import { PALETTE, FONT_WEIGHT } from "constants/styles";

export enum TextLinkVariant {
  primary = "primary",
  secondary = "secondary",
}

const TextLinkEl = styled.a<{ variant: TextLinkVariant }>`
  font-weight: ${FONT_WEIGHT.normal};
  color: ${PALETTE.black};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  ${(props) =>
    props.variant === TextLinkVariant.secondary &&
    css`
      color: ${PALETTE.black60};
      text-decoration: none;

      &:hover {
        opacity: 0.7;
      }
    `};
`;

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: TextLinkVariant;
}

export const TextLink: React.FC<TextLinkProps> = ({
  variant = TextLinkVariant.primary,
  children,
  ...props
}) => (
  <TextLinkEl variant={variant} {...props}>
    {children}
  </TextLinkEl>
);
