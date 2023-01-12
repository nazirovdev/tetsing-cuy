import HTMLReactParser from 'html-react-parser'
import React, { useEffect } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Form from '../components/Form'
import TextArea from '../components/Form/TextArea'
import Main from '../components/Layout/Main'
import Section from '../components/Layout/Section'
import ThreadAvatar from '../components/Thread/ThreadAvatar'
import ThreadCard from '../components/Thread/ThreadCard'
import ThreadCategory from '../components/Thread/ThreadCategory'
import ThreadHeader from '../components/Thread/ThreadHeader'
import ThreadWrapper from '../components/Thread/ThreadWrapper'
import Heading from '../components/Typografi/Heading'
import Icon from '../components/Typografi/Icon'
import Paragrapf from '../components/Typografi/Paragraph'
import SubHeading from '../components/Typografi/SubHeading'

export default function DetailThread() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
  }, [params.id, dispatch])

  return (
    <Main>
      <Section>
        <Heading size='1.5em'>Detail Thread</Heading>
        <ThreadWrapper>
          <ThreadCard>
            <Link to='/threads/1'><SubHeading fw='bold' size='1.1em'>{'title'}</SubHeading></Link>
            <ThreadHeader>
              <ThreadAvatar src={'owner.avatar'} />
              <SubHeading>{'owner.name'}</SubHeading>
              <Icon>
                <GoPrimitiveDot />
              </Icon>
              <SubHeading fw='normal'>{'createdAt'}</SubHeading>
            </ThreadHeader>
            <div style={{ color: '#D9D9E3', fontSize: '1em' }}>{HTMLReactParser('body')}</div>
            <ThreadCategory>
              <Paragrapf fw='bold'>{'category'}</Paragrapf>
            </ThreadCategory>
            <ThreadHeader>
              <ThreadHeader gap='0.3em'>
                <Icon>
                  <AiFillLike onClick={() => { }} />
                </Icon>
                <Paragrapf>{'upVotesBy.length'}</Paragrapf>
              </ThreadHeader>
              <ThreadHeader gap='0.3em'>
                <Icon>
                  <AiFillDislike onClick={() => { }} />
                </Icon>
                <Paragrapf>{'downVotesBy.length'}</Paragrapf>
              </ThreadHeader>
            </ThreadHeader>
            {/* komentar */}
            <SubHeading>Beri Komentar Anda</SubHeading>
            <Form mt='1em' w='100%'>
              <TextArea placeholder='Masukkan Komentar anda' />
              <Button padding='0.8em' color='white' bg='#0e9272'>Kirim</Button>
            </Form>
            <SubHeading>Komentar {'comments.length'}</SubHeading>
            <ThreadHeader>
              <ThreadAvatar />
              <SubHeading>Nazirovdev</SubHeading>
              <Icon>
                <GoPrimitiveDot />
              </Icon>
              <SubHeading fw='normal'>2 days ago</SubHeading>
            </ThreadHeader>
            <Paragrapf fw='normal'>
              saya mengalami beberap error saat membuat testing di thunk function.1. error saat penggunaan getState(). berikut errornya berikut adalah thunk functionnyadan code testingnya2. error pada
            </Paragrapf>
            <ThreadHeader fdr='row'>
              <ThreadHeader fdr='row'>
                <ThreadHeader gap='0.3em'>
                  <Icon>
                    <AiFillLike />
                  </Icon>
                  <Paragrapf>0</Paragrapf>
                </ThreadHeader>
                <ThreadHeader gap='0.3em'>
                  <Icon>
                    <AiFillDislike />
                  </Icon>
                  <Paragrapf>0</Paragrapf>
                </ThreadHeader>
              </ThreadHeader>
            </ThreadHeader>
            {/* end */}
          </ThreadCard>
        </ThreadWrapper>
      </Section>
    </Main>
  )
}
