import { render, screen, fireEvent } from '@testing-library/react'
import App from './App.js'

describe('App', () => {
  it('should be able to render the component correctly', () => {
    render(<App />)

    expect(screen.queryByText('Hello,')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('digite seu nome')).toBeInTheDocument()
    expect(screen.queryByRole('img')).toBeInTheDocument()
  })

  it('should be able to find the image by the alt text', async () => {
    render(<App />)

    const image = await screen.findByAltText('ilustração de uma mulher negra usando o computador e segurando uma xícara')
    expect(image).toBeInTheDocument()
  })

  it('should be able to get input value correctly', () => {
    render(<App />)

    const inputElement = screen.queryByPlaceholderText('digite seu nome')
    fireEvent.change(inputElement, {
      target: {
        value: 'Simara'
      }
    })

    expect(screen.queryByText('Simara')).toHaveTextContent('Simara')
  })

  it('should be able to render the correct content after user type', () => {
    render(<App />)

    const input = screen.queryByPlaceholderText('digite seu nome')
  
    fireEvent.change(input, {
      target: {
        value: 'Simara'
      }
    })

    expect(screen.queryByText('Simara')).toHaveTextContent('Simara')
    expect(screen.queryByText('Hello,')).toHaveTextContent('Hello, Simara')
  })
})