import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    padding-top: 24px;
    padding-bottom: 64px;
`;

export const Header = styled.header`
    margin-bottom: 32px;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: 480px) {
        display: block;
    }
`;

export const Input = styled.input`
    flex: 1;
    border-radius: 4px;
    padding: 16px 24px;
    border: 1px solid #545454;
    background: #2D2D2D;
    margin-right: 16px;
    display: block;

    @media (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 16px;
        width: 100%;
    }
`;

const ButtonStyle = `
    background: linear-gradient(265.97deg, #1673FF 0%, #00A3FF 100%);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 16px 32px;
    font-weight: bold;
    font-size: 16px;
    display: block;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    ${ButtonStyle};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;

    @media (max-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    border-radius: 4px;
    padding: 24px;
    background: #2D2D2D;
    border: 1px solid #545454;
    position: relative;
    display: flex;
    flex-direction: column;

    .favicon {
        width: 32px;
        height: 32px;
        position: absolute;
        right: 24px;
        top: 24px;
        border-radius: 0;
        background: #2d2d2d;
        border-bottom-left-radius: 35%;
        border: 1px solid #2d2d2d;
        padding: 8px;
    }

    .thumb {
        width: 100%;
        height: 200px;
        border-radius: 4px;
        margin-bottom: 24px;
        border: 1px solid #545454;
        display: block;
        object-fit: cover;
        object-position: center;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    p {
        color: #ddd;
        font-size: 12px;
        margin-bottom: 16px;
    }
`;

export const SmallButton = styled.a`
    ${ButtonStyle};
    padding: 8px 16px;
    width: 100%;
    margin-top: auto;
    display: block;
    text-decoration: none;
    text-align: center;
`;

export const Remove = styled.a`
    text-decoration: none;
    margin-top: 8px;
    display: block;
    color: #ddd;
    cursor: pointer;
`;