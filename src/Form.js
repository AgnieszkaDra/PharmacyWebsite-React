import React from 'react'
import Section from './components/Section'
import PatientData from './components/layout/PatientData'
import ElectronicData from './components/layout/ElectronicData'
import NonPrescriptionData from './components/layout/NonPrescriptionData'
import ElectronicOrder from './components/layout/ElectronicOrder'
import Button from './components/ui/Button'
import PaperPrescriptionData from './components/layout/PaperPrescriptionData'
import { useInputsValue } from './hooks/useInputsValue'
import { addNewElectronicOrder } from './hooks/addNewElectronicOrder'
import { addNewNonprescriptionOrder } from './hooks/addNewNonPrescriptionOrder'
import PropTypes from 'prop-types'
import { NonPrescriptionOrder } from './components/layout/NonPrescrptionOrder'
export const Form = (props) => {
  const {
    className
  } = props
  const { inputsValue, onChangeValue } = useInputsValue()
  const { newOne, addNew, removeElement } = addNewElectronicOrder()
  const { newOneNon, addNewNon } = addNewNonprescriptionOrder()

  console.log(newOne, addNew, removeElement)
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
        content={
          <ElectronicData
            data={inputsValue}
            onChange={onChangeValue}
            result={addNew}
          >
          </ElectronicData>
        }
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
        content={
          <NonPrescriptionData
            data={inputsValue}
            onChange={onChangeValue}
            result={addNewNon}
          >
          </NonPrescriptionData>
        }
      >
      </Section>
      <Section
        className={'section-form-order'}
        title={'Your order'}
        content={
          <>
            <ElectronicOrder
              data={inputsValue}
              onChange={onChangeValue}
              result={newOne}
              remove={removeElement}
            >
            </ElectronicOrder>
            <NonPrescriptionOrder
              data={inputsValue}
              onChange={onChangeValue}
              result={newOneNon}
            >
            </NonPrescriptionOrder>
          </>
        }
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
