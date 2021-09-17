import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Thumb from './Thumb'
import { toggleModal, createNewPhone } from '../store/actions'

const phoneSchema = Yup.object().shape({
  name: Yup.string(),
  manufacturer: Yup.string(),
  description: Yup.string(),
  color: Yup.string(),
  price: Yup.number().positive(),
  screen: Yup.string(),
  processor: Yup.string(),
  ram: Yup.number().positive(),
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const fieldGroup = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1rem'
}

const errorMessage = {
  color: 'tomato',
  marginLeft: '1rem',
  fontSize: '0.75em'
}

const AddPhone = () => {
  const open = useSelector(state => state.isModalOpen)
  const dispatch = useDispatch()

  const handleClose = () => dispatch(toggleModal(!open))
  const handleSubmit = phoneData => dispatch(createNewPhone(phoneData))

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Formik
              initialValues={{
                name: '',
                manufacturer: '',
                description: '',
                color: '',
                price: 0,
                screen: '',
                processor: '',
                ram: '',
                file: undefined,
              }}
              validationSchema={ phoneSchema }
              enableReinitialize={ true }
              onSubmit={
                values => {
                  handleSubmit(values)
                }
              }
            >
              {
                ({ values, errors, touched, setFieldValue }) => (
                  <Form style={fieldGroup}>
                    <div>
                      <div style={fieldGroup}>
                        <Field name="name" placeholder="Name" />
                        {
                          errors.name && touched.name
                            ? ( <div style={errorMessage}>Required!</div> )
                            : null
                        }
                      </div>
                      <div style={fieldGroup}>
                        <Field name="manufacturer" placeholder="Manufacturer" />
                        {
                          errors.manufacturer && touched.manufacturer
                            ? ( <div style={errorMessage}>Required!</div> )
                            : null
                        }
                      </div>
                      <div style={fieldGroup}>
                        <Field
                          name="description"
                          placeholder="Description"
                          component="textarea"
                          rows="4"
                          style={{ maxWidth: '85%' }}
                        />
                      </div>
                      <div style={fieldGroup}>
                        <Field name="color" placeholder="Color" />
                      </div>
                      <div style={fieldGroup}>
                        <Field type="number" name="price" placeholder="Price" />
                        {
                          errors.price && touched.price
                            ? ( <div style={errorMessage}>Required!</div> )
                            : null
                        }
                      </div>
                      <div style={fieldGroup}>
                        <Field name="screen" placeholder="Screen" />
                      </div>
                      <div style={fieldGroup}>
                        <Field name="processor" placeholder="Processor (GHz)" />
                      </div>
                      <div style={fieldGroup}>
                        <Field type="number" name="ram" placeholder="Ram (Mb)" />
                      </div>
                      <input name="file" type="file" onChange={
                          (event) => {
                              setFieldValue('file', event.currentTarget.files[0])
                          }
                      }
                      />
                      {errors.file && touched.file ? (
                          <div>{errors.file}</div>
                      ) : null}
                      {
                        values.file ? (
                            <Thumb key="preview" file={values.file} />
                        ) : (
                            ''
                        )
                      }
                    </div>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                      Save Phone
                    </Button>
                  </Form>
                )
              }
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default AddPhone