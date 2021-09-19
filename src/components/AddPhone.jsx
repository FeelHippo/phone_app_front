import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import Thumb from './Thumb'
import { toggleModal, createNewPhone } from '../store/actions'
import {isMobile} from 'react-device-detect'

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
  width: isMobile ? '80vw' : '400px',
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
  marginBottom: '4px'
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
                ram: 0,
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
                        <TextField name="name" placeholder="Name" error={touched.name && !!errors.name} size="small" onChange={e => setFieldValue('name', e.target.value)} />
                      </div>
                      <div style={fieldGroup}>
                        <TextField name="manufacturer" placeholder="Manufacturer" error={touched.manufacturer && !!errors.manufacturer} size="small" onChange={e => setFieldValue('manufacturer', e.target.value)} />
                      </div>
                      <div style={fieldGroup}>
                        <Field
                          name="description"
                          placeholder="Description"
                          component={ TextField }
                          rows="4"
                          style={{ maxWidth: '85%' }}
                          onChange={e => setFieldValue('description', e.target.value)}
                        />
                      </div>
                      <div style={fieldGroup}>
                        <TextField name="color" placeholder="Color" error={touched.color && !!errors.color} size="small" onChange={e => setFieldValue('color', e.target.value)} />
                      </div>
                      <div style={fieldGroup}>
                        <TextField type="number" name="price" placeholder="Price" error={touched.price && !!errors.price} size="small" onChange={e => setFieldValue('price', e.target.value)}/>
                      </div>
                      <div style={fieldGroup}>
                        <TextField name="screen" placeholder="Screen" error={touched.screen && !!errors.screen} size="small" onChange={e => setFieldValue('screen', e.target.value)} />
                      </div>
                      <div style={fieldGroup}>
                        <TextField name="processor" placeholder="Processor (GHz)" error={touched.processor && !!errors.processor} size="small" onChange={e => setFieldValue('processor', e.target.value)} />
                      </div>
                      <div style={fieldGroup}>
                        <TextField type="number" name="ram" placeholder="Ram (Mb)" error={touched.ram && !!errors.ram} size="small" onChange={e => setFieldValue('ram', e.target.value)} />
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
                    <Button type="submit" size="large" variant="contained" endIcon={<SendIcon />} />
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