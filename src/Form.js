import React from 'react'
import { Link } from 'react-router-dom'
import { Section, PatientData, ElectronicData, NonPrescriptionData, PaperPrescriptionData, ElectronicOrder, PaperOrder, NonPrescriptionOrder, PatientDataOrder } from './components/layout'
import FormElement from './components/ui/FormElement/FormElement'
import { useInputFiles, useInputsValue, useShowElectronicPrescriptions, useShowPaperPrescriptions, useShowNonPrescriptions } from './hooks/'

import PropTypes from 'prop-types'

export const Form = () => {
  const { inputsValue, onChangeValue } = useInputsValue()
  const { fileUploadForms } = useInputFiles()
  const { electronicPrescription, addElectroPrescription, deleteElectroPrescription } = useShowElectronicPrescriptions()
  const { imageSrc, handleFileChange, addPaperPrescription, deletePaperPrescription } = useShowPaperPrescriptions()
  const { nonPrescription, addNonPrescription, deleteNonPrescription } = useShowNonPrescriptions()
  return (
    <div className={'order'}>
      <Link
        className={'order__link-home'}
        to={'/'}
      >
        Strona główna
      </Link>
      <Section
        className={'order__section username'}
        title={'Dane Pacjenta'}
      >
        <PatientData
          data={inputsValue}
          onChange={onChangeValue}
        />
      </Section>
      <Section
        className={'order__section electronicPrescription'}
        title={'Leki na recepte elektroniczną'}
      >
        <ElectronicData
          data={inputsValue}
          onChange={onChangeValue}
          result={addElectroPrescription}
        />
      </Section>
      <Section
        className={'order__section paperPrescription'}
        title={'Leki na receptę papierową'}
      >
        <PaperPrescriptionData
          data={fileUploadForms}
          onChange={handleFileChange}
          result={addPaperPrescription}
        />
      </Section>
      <Section
        className={'order__section nonPrescription'}
        title={'Pozostałe leki'}
      >
        <NonPrescriptionData
          data={inputsValue}
          onChange={onChangeValue}
          result={addNonPrescription}
        />
      </Section>
      <Section
        className={'order__section totalOrder'}
        title={'Twoje zamówienie'}
      >
        <FormElement className={'totalOrder__form'}>
          <PatientDataOrder
            data={inputsValue}
            onChange={onChangeValue}
          >
          </PatientDataOrder>
          <ElectronicOrder
            data={inputsValue}
            onChange={onChangeValue}
            result={electronicPrescription}
            remove={deleteElectroPrescription}
          >
          </ElectronicOrder>
          <PaperOrder
            data={imageSrc}
            result={imageSrc}
            resul2={fileUploadForms}
            remove={deletePaperPrescription}
          >
          </PaperOrder>
          <NonPrescriptionOrder
            data={inputsValue}
            onChange={onChangeValue}
            result={nonPrescription}
            remove={deleteNonPrescription}
          >
          </NonPrescriptionOrder>
        </FormElement>
      </Section>
    </div>
  )
}

Form.propTypes = {
  className: PropTypes.string
}

export default Form
