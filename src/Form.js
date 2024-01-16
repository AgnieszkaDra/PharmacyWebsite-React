import React from 'react'
import Section from './components/Section'
import PatientData from './components/layout/PatientData'
import ElectronicData from './components/layout/ElectronicData'
import NonPrescriptionData from './components/layout/NonPrescriptionData'
import ElectronicOrder from './components/layout/ElectronicOrder'
import Button from './components/ui/Button'
import PaperPrescriptionData from './components/layout/PaperPrescriptionData'
import { useInputsValue } from './hooks/useInputsValue'
import { useShowElectronicOrder } from './hooks/useShowElectronicOrder'
import PropTypes from 'prop-types'
export const Form = (props) => {
  const {
    className
  } = props
  const { inputsValue, onChangeValue } = useInputsValue()
  const { electronicOrder, showElectronicOrder } = useShowElectronicOrder()
  return (
    <div className={className}>
      <Section
        className={'section-form-username'}
        title={'Name and Surname'}
        content={<PatientData></PatientData>}
      >
      </Section>
      <Section
        className={'section-form-electronicPrescription'}
        title={'Drugs for electronic prescription'}
        content={<ElectronicData data={inputsValue} onChange={onChangeValue} result={showElectronicOrder}></ElectronicData>}
      >
      </Section>
      <Section
        className={'section-form-paperPrescription'}
        title={'Drugs for paper prescription'}
        content={<PaperPrescriptionData></PaperPrescriptionData>}
      >
      </Section>
      <Section
        className={'section-form-nonPrescription'}
        title={'Other drugs and medicaments'}
        content={<NonPrescriptionData></NonPrescriptionData>}
      >
      </Section>
      <Section
        className={'section-form-order'}
        title={'Your order'}
        content={<ElectronicOrder data={inputsValue} onChange={onChangeValue} result={electronicOrder}></ElectronicOrder>}
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
