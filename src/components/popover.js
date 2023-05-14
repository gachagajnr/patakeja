import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";

import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  for: Yup.string().required("Required"),
  town: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
});

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Patakeja</Popover.Header>
    <Popover.Body>
      <Formik
        initialValues={{
          name: "",
          email: "",
          for: "",
          town: "",
          price: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // setSubmitting(true);
          console.log(values);
          // setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Text className="text-danger">
              *We'll never share your information.
            </Form.Text>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "has-error" : null}
                style={{ color: "black" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
              />
            </Form.Group>
            <Row>
              <Col sm>
                <Form.Group controlId="formBasicFor">
                  <Form.Label>Looking For</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Looking for"
                    name="for"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.for}
                    className={touched.for && errors.for ? "has-error" : null}
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group controlId="formBasicTown">
                  <Form.Label>City/Town</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City/Town"
                    name="town"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.town}
                    className={touched.town && errors.town ? "has-error" : null}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-1" controlId="formBasicRange">
              <Form.Label>Price range</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price range"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                className={touched.price && errors.price ? "has-error" : null}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              type="submit"
              style={{ width: "100%" }}
            >
              Request Access
            </Button>
          </Form>
        )}
      </Formik>
    </Popover.Body>
  </Popover>
);

export { popover };
