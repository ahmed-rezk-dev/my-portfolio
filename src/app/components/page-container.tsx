import { ReactNode } from "react"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 0px 50px;
`
export default function PageContainer({ children }: { children: ReactNode }) {
	return <Container>{children}</Container>
}
