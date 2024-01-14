import React from 'react'
import Section from './components/Section'
import PatientData from './components/layout/PatientData'
import ElectronicData from './components/layout/ElectronicData'
import NonPrescriptionData from './components/layout/NonPrescriptionData'
import Button from './components/ui/Button'
import PropTypes from 'prop-types'
import PaperPrescriptionData from './components/layout/PaperPrescriptionData'

export const Form = (props) => {
  const {
    className
  } = props
  return (
    <div className={className}>
      <Section
        className={'section-form-username'}
        title={'Name and Surname'}
        content = {<PatientData></PatientData>}
      >
      </Section>
      <Section
        className={'section-form-electronicPrescription'}
        title={'Drugs for electronic prescription'}
        content = {<ElectronicData></ElectronicData>}
      >
      </Section>
      <Section
        className={'section-form-paperPrescription'}
        title={'Drugs for paper prescription'}
        content = {<PaperPrescriptionData></PaperPrescriptionData>}
      >
      </Section>
      <Section
        className={'section-form-nonPrescription'}
        title={'Other drugs and medicaments'}
        content = {<NonPrescriptionData></NonPrescriptionData>}
      >
      </Section>
      <Section
        className={'section-form-order'}
        title={'Your order'}
      >
      </Section>
      <Button
        type={'submit'}
        className={'button__submit'}
        text={'Zamawiam'}
      >
      </Button>
    </div>
  )
}

Form.propTypes = {
  className: PropTypes.string
}

export default Form
