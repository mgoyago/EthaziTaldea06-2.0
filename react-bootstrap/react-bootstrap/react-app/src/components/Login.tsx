import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError("Mesedez, sartu guztiak eremuak.");
      } else {
        // Hemen joan beharko litzateke erabiltzailea autentifikatzeko logika
        setError("");
        alert("Saioa hasi da!");
      }
    };
  
    return (
      <Container fluid className="login-container">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="login-form-container">
            <h2 className="text-center">Saioa hasi</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email-a</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Idatzi zure email-a"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group controlId="formPassword">
                <Form.Label>Pasahitza</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Idatzi zure pasahitza"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
  
              {error && <p className="text-danger">{error}</p>}
  
              <Button variant="primary" type="submit" block>
                Saioa hasi
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }