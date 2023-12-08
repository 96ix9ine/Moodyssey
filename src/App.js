import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Header, SimpleCell, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Spacing, Title, IconButton, Subhead, Tabbar, TabbarItem, FormItem, FormField, PanelHeaderBack, Avatar, Cell, Switch, Placeholder, Checkbox, Text, Link } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons';
import './styles/Mood.css';
import './styles/StartScreen.css';
import './styles/What is happend.css';
import './styles/Settings.css';
import './styles/Advice.css';
import './styles/Chronicle.css';
import './styles/Statistics.css';

import {Icon24Add} from '@vkontakte/icons';
import {Icon28SettingsOutline} from '@vkontakte/icons'
import {Icon28LightbulbStarOutline} from '@vkontakte/icons'
import {Icon28GraphOutline} from '@vkontakte/icons'
import {Icon28ListAddOutline} from '@vkontakte/icons'

import {Icon28BriefcaseOutline} from '@vkontakte/icons'
import {Icon28EducationOutline} from '@vkontakte/icons'
import {Icon28ArmchairOutline} from '@vkontakte/icons'
import {Icon28LikeOutline} from '@vkontakte/icons'
import {Icon28PlaneOutline} from '@vkontakte/icons'
import {Icon28BookSpreadOutline} from '@vkontakte/icons'
import {Icon28MovieReelOutline} from '@vkontakte/icons'
import {Icon28MusicOutline} from '@vkontakte/icons'
import {Icon28AppleOutline} from '@vkontakte/icons'
import {Icon28GameOutline} from '@vkontakte/icons'
import {Icon28Users3Outline} from '@vkontakte/icons'
import {Icon28PaletteOutline} from '@vkontakte/icons'

import {Icon24DoorArrowLeftOutline} from '@vkontakte/icons'
import {Icon24MessageArrowRightOutline} from '@vkontakte/icons'

const App = () => {
	const [activePanel, setActivePanel] = useState('start-screen');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [simple, setSimple] = useState('two');

	const [input, setInput] = useState('');

	const CustomInput = () => {
		const style = {
		  position: 'relative',
		  display: 'block',
		  width: '100%',
		  margin: 0,
		  paddingRight: 12,
		  paddingLeft: 12,
		  fontSize: 16,
		  lineHeight: '20px',
		  textOverflow: 'ellipsis',
		  color: 'white',
		  border: 'none',
		  background: 'transparent',
		};
	  
		return <input type="text" style={style} placeholder="Нам было бы интересно узнать😢" defaultValue='Расскажи, что влияет на твое настроение' />;
	  };

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			// setPopout(null);
		}
		fetchData();
	}, []);

	// const go = e => {
	// 	setActivePanel(e.currentTarget.dataset.to);
	// };

	const containerStyles = {
		width: '100vw',
		height: '98vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F7F4F2'
	  };

	const containerStyles2 = {
		width: '100vw', 
		height: '100vh', 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'flex-start', 
		flexDirection: 'column', 
		backgroundColor: '#F7F4F2'
	}

	const CheckboxAdd = (event) => {
        event.target.classList.toggle('checkbox-boxshadow')
    }
		

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout header={<PanelHeader separator={false}/>}>
						<SplitCol>
							<View id='start' activePanel={activePanel}>
								<Panel id='start-screen'>
									<Group separator='hide'>
										<div style={containerStyles} className='div-screen'>
											<IconButton className='Logo-button' onClick={() => setActivePanel('start-1')}/>
											<Title>Moodyssey</Title>
											<Subhead>vk mini app</Subhead>
										</div>
									</Group>
								</Panel>
								<Panel id='start-1'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<Title className='question'>Чего ты хочешь достичь?</Title>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Стать счастливее</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Спокойствие</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Перебороть страхи</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Анализ настроения</Button>
											<Spacing size={100}></Spacing>
											<Button className='button-next' size='s' appearance='positive'
											onClick={() => setActivePanel('start-2')}>Далее</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-2'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('start-1')}/>}></PanelHeader>
											<Title className='question-2'>Когда тебе удобнее записывать настроение?</Title>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">18:00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">19:00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">20:00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">21.00</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-general' size="l" appearance="accent">Выбрать потом</Button>
											<Spacing size={40}></Spacing>
											<Button className='button-next' size='s' appearance='positive'
											onClick={() => setActivePanel("what is happend-1")}>Далее</Button>
										</div>
									</Group>
								</Panel>
								<Panel id='start-3'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('start-2')}/>}></PanelHeader>
											<Title className='question'>Твое настроение</Title>
											<Spacing size={40}></Spacing>
											<Group separator='hide'>
												<div className='mood'></div>
											</Group>
											<Spacing size={100}></Spacing>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
														<Icon28ListAddOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
														<Icon28GraphOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
														<Icon24Add fill='white' className='mood-plus-button'/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("facts and articles")}> 
														<Icon28LightbulbStarOutline/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("settings")}>
														<Icon28SettingsOutline/>
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
								<Panel id='what is happend-1'>
									<Group separator='hide'>
										<div style={containerStyles} className='what-is-happend'>
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')}/>}></PanelHeader>
											<Spacing size={100}></Spacing>
											<div className='WIS-animal-1'></div>
											<Title className='WIS-title'>Как ты себя чувствуешь?</Title>
											<Spacing size={40}></Spacing>
											<Tabbar style={{position: 'static', minWidth: "50%", maxWidth: '75%', borderRadius:'20px'}}>
												<TabbarItem selected={simple === 'one'} onClick={() => setSimple('one')} text='Хорошо' className='WIS-button-choice'>
												</TabbarItem>
												<TabbarItem selected={simple === 'two'} onClick={() => setSimple('two')} text='Плохо' className='WIS-button-choice'>
												</TabbarItem>
											</Tabbar>
											<Spacing size={40}></Spacing>
											<div className='WIS-div-buttons'>
												<Button className='WIS-button-save' onClick={() => setActivePanel("chronicle")}>
													<Title className='WIS-title2-screen2'>Сохранить</Title>
												</Button>
												<Button className='WIS-button-save' onClick={() => setActivePanel("what is happend-2")}>
													<Title className='WIS-title2-screen2'>Дополнить</Title>
												</Button>
											</div>
										</div>
									</Group>
								</Panel>
								<Panel id='what is happend-2'>
									<div style={containerStyles}>
									<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-1')}/>}></PanelHeader>
									<div className='WIS-polosa'></div>
									<Group mode='plain' className='WIS-group'>
										<div className='WIS-animal-2'></div>
										<Title className='WIS-title-screen2'>Плохо</Title>
										<Spacing size={10}></Spacing>
										<Subhead className='WIS-subtitle-screen2'>Расскажи что происходит</Subhead>
										<Spacing size={10}></Spacing>
										<div className='WIS-div-grid'>
											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd}  id='btn1' className='WIS-iconbutton'>
												<Checkbox className='WIS-iconbutton-checkbox' >
													<Icon28BriefcaseOutline/>	
												</Checkbox>										
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Работа</Title>
											</div>
						
											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd}  id='btn2' className='WIS-iconbutton'>
												<Checkbox className='WIS-iconbutton-checkbox' >
													<Icon28EducationOutline/>
												</Checkbox>									
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Учеба</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn3' className='WIS-iconbutton'>
												<Checkbox className='WIS-iconbutton-checkbox'>
													<Icon28ArmchairOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Отдых.</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn4' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28LikeOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Отношения</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn5' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28PlaneOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Полет</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn6' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28BookSpreadOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Чтение</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn7' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28MovieReelOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Кино</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn8' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28MusicOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Музыка</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn9' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28AppleOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Еда</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn10' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28GameOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Игра</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn11' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28Users3Outline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Друзья</Title>
											</div>

											<div className='WIS-div-grid-components'>
											<IconButton onFocus={CheckboxAdd} id='btn12' className='WIS-iconbutton'>
												<Checkbox  className='WIS-iconbutton-checkbox' >
													<Icon28PaletteOutline/>
												</Checkbox>
											</IconButton>
											<Title className='WIS-div-grid-components-title'>Рисование</Title>
											</div>
										</div>
										<FormItem htmlFor='writtingMood'>
											<FormField className='WIS-input'>
												<CustomInput input={input}/>
											</FormField>
										</FormItem>
										<div className='WIS-buttons-container'>
											<Button style={{margin: '10px'}} className='WIS-button-save-2' onClick={() => setActivePanel("chronicle")}>
												<Title className='WIS-title2-screen2'>Сохранить</Title>
											</Button>
											<Button style={{margin: '10px'}} className='WIS-button-change-2' onClick={() => setActivePanel("what is happend-3")}>
												<Title className='WIS-title2-screen2'>Дополнить</Title>
											</Button>
										</div>
										</Group>
									</div>
								</Panel>
								<Panel id='what is happend-3'>
									<div style={containerStyles}>
										<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-2')}/>}></PanelHeader>
										<div className='WIS-polosa'></div>
										<Group mode='plain' className='WIS-group'>
											<div className='WIS-animal-2'></div>
											<Title className='WIS-title-screen2'>Плохо</Title>
											<Spacing size={10}></Spacing>
											<Subhead className='WIS-subtitle-screen2'>Расскажи что происходит</Subhead>
											<Spacing size={10}></Spacing>
											<div className='WIS-div-grid2'>
												<div className='WIS-div-grid2-container'>
													<div id='btn1-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Усталость</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Волнение</Title></Checkbox></IconButton>
													</div>
													<div id='btn2-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Уныние</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Грусть</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Досада</Title></Checkbox></IconButton>
													</div>
													<div id='btn3-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Огорчение</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Упадок духа</Title></Checkbox></IconButton>
													</div>
													<div id='btn4-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Стресс</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Злость</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Страх</Title></Checkbox></IconButton>
													</div>
													<div id='btn5-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Нервозность</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Отвращение</Title></Checkbox></IconButton>
													</div>
													<div id='btn6-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Стыд</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Зависть</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Гнев</Title></Checkbox></IconButton>
													</div>
													<div id='btn7-grid2' className='WIS-div-grid2-container-for-buttons'>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Беспокойство</Title></Checkbox></IconButton>
													<IconButton onFocus={CheckboxAdd} className='WIS-div-grid2-button grid2-button'>
													<Checkbox className='WIS-iconbutton-checkbox checkbox-grid2'><Title className='WIS-grid2-checkbox-title'>Ненависть</Title></Checkbox></IconButton>
													</div>
												</div>
											</div>
											<IconButton style={{marginTop: '20px'}} className='WIS-button-save' onClick={() => setActivePanel("chronicle")}>
												<Title className='WIS-title2-screen2'>Сохранить</Title>
											</IconButton>
										</Group>
									</div>
								</Panel>
								<Panel id='settings'>
									<div className='settings-div'>
									<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')}/>}></PanelHeader>
									<div className='settings-polosa'></div>
									<Spacing size={40}></Spacing>
									<Title className='settings-title'>Настройки</Title>
									<Spacing size={40}></Spacing>
										<Group style={{width: '100vw', height: '100vh', backgroundColor: '#F6F3F1'}}>
											<Cell className='settings-cell'
												before={fetchedUser?.photo_200 ? <Avatar src={fetchedUser?.photo_200}/> : null}
												subtitle={fetchedUser?.city && fetchedUser?.city.title ? fetchedUser?.city.title : ''}
											>
												{`${fetchedUser?.first_name} ${fetchedUser?.last_name}`}
											</Cell>
											<Spacing size={20}></Spacing>
											<Group mode='plain'>
												<SimpleCell Component="label" after={<Switch defaultChecked/>} style={{color: 'black'}}>
													Уведомления
												</SimpleCell>
											</Group>
											<Group mode='plain'>
												<SimpleCell onClick={() => setActivePanel('policy')} after={<Icon24DoorArrowLeftOutline/>} style={{color: 'black'}}>	
													Политика конфиденциальности
												</SimpleCell>
											</Group>
											<Group mode='plain'>
												<SimpleCell after={<Icon24MessageArrowRightOutline/>}>	
													<Link href='https://vk.com/app51801024'>Поделиться приложением</Link>
												</SimpleCell>
											</Group>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
														<Icon28ListAddOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
														<Icon28GraphOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
														<Icon24Add fill='white' className='mood-plus-button'/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("facts and articles")}>
														<Icon28LightbulbStarOutline/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("settings")}>
														<Icon28SettingsOutline/>
												</TabbarItem>
											</Tabbar>
										</Group>
									</div>
								</Panel>
								<Panel id='policy'>
									<PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('settings')}/>}>Ничего</PanelHeader>
									<Placeholder>Тут ничего нет</Placeholder>
								</Panel>
								<Panel id='facts and articles'>
									<div style={containerStyles2}>
										<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')}/>}></PanelHeader>
										<Spacing size={0}></Spacing>
										<div className='advice-polosa'>
											<Title className='advice-title'>Советы</Title>	
										</div>
											<Group separator='hide' mode='plain' >
												<Spacing size={20}></Spacing>
												<Title className='advice-title-2'>Факты</Title>
												<Spacing size={40}></Spacing>
												<Button className='advice-button' onClick={() => setActivePanel("facts")}>
													Чем умнее человек, тем чаще он не уверен в своих собственных убеждениях.
												</Button>
												<Spacing size={40}></Spacing>
												<Title className='advice-title-2'>Статьи</Title>
												<Spacing size={40}></Spacing>
												<Button className='advice-button' onClick={() => setActivePanel("articles")}>
													Если после общения с конкретным человеком вы испытываете негативные эмоции и чувствуете неприятный осадок – вы имели дело с токсичной персоной.
												</Button>
												<Spacing size={20}></Spacing>
												<Button className='advice-button' onClick={() => setActivePanel("articles")}>
													80% людей встречают своих будущих супругов в возрасте 16 лет.
												</Button>
												<Spacing size={20}></Spacing>
												<Button className='advice-button-3' onClick={() => setActivePanel("articles")}>
													Вы с больше вероятностью достигнете целей, если будете держать их при себе.</Button>											
												<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
														<Icon28ListAddOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
														<Icon28GraphOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
														<Icon24Add fill='white' className='mood-plus-button'/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("facts and articles")}>
														<Icon28LightbulbStarOutline/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("settings")}>
														<Icon28SettingsOutline/>
												</TabbarItem>
												</Tabbar>
											</Group>
									</div>
								</Panel>
								<Panel id='facts'>
									<PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('facts and articles')}/>}>Ничего</PanelHeader>
									<Placeholder>Тут ничего нет</Placeholder>
								</Panel>
								<Panel id='articles'>
									<PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('facts and articles')}/>}>Ничего</PanelHeader>
									<Placeholder>Тут ничего нет</Placeholder>
								</Panel>
								<Panel id='chronicle'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-3')}/>}></PanelHeader>
											<div className='chronicle-polosa'></div>
											<Spacing size={30}></Spacing>
											<Title className='chronicle-title'>Твое настроение</Title>
											<Spacing size={0}></Spacing>
											<Group mode='plain'>
													<div className='chronicle-bigdiv-container'>
														<Group separator='hide'>
															<div className='chronicle-div-container'>
																<div className='chronicle-div-date'>6 дек</div>
																<div className='chronicle-div-entry'>
																	<div className='chronicle-div-emoji emoji-1'></div>
																	<div className='chronicle-div-zag'>
																		<Title className='chronicle-div-title'>Хорошо</Title>
																		<Subhead className='chronicle-div-subtitle'>Описание радостей и новых возможностей в жизни</Subhead>
																	</div>
																</div>
															</div>
														</Group>
														
														<Group separator='hide'>
															<div className='chronicle-div-container'>
																<div className='chronicle-div-date'>1 дек</div>
																<div className='chronicle-div-entry'>
																	<div className='chronicle-div-emoji emoji-2'></div>
																	<div className='chronicle-div-zag'>
																		<Title className='chronicle-div-title'>Плохо</Title>
																		<Subhead className='chronicle-div-subtitle'>Описание суровой и тяжелой жизни</Subhead>
																	</div>																	
																</div>
															</div>
														</Group>														
														
														<Group separator='hide'>
															<div className='chronicle-div-container'>
																<div className='chronicle-div-date'>27 ноя</div>
																<div className='chronicle-div-entry'>
																	<div className='chronicle-div-emoji emoji-3'></div>
																	<div className='chronicle-div-zag'>
																		<Title className='chronicle-div-title'>Хорошо</Title>
																		<Subhead className='chronicle-div-subtitle'>Описание радостей и новых возможностей в жизни</Subhead>
																	</div>																	
																</div>
															</div>
														</Group>
													</div>
											</Group>
											<Spacing size={100}></Spacing>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
														<Icon28ListAddOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
														<Icon28GraphOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
														<Icon24Add fill='white' className='mood-plus-button'/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("facts and articles")}> 
														<Icon28LightbulbStarOutline/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("settings")}>
														<Icon28SettingsOutline/>
												</TabbarItem>
											</Tabbar>
										</div>
								</Panel>
								<Panel id='statistics'>
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')}/>}></PanelHeader>
											<Title className='statistics-title'>Статистика</Title>
											<Spacing size={40}></Spacing>
											<Tabbar style={{position: 'static', minWidth: "50%", maxWidth: '85%', borderRadius:'30px'}}>
												<TabbarItem selected={simple === 'one'} onClick={() => setSimple('one')} text='Неделя' className='statistics-button-choice'></TabbarItem>
												<TabbarItem selected={simple === 'two'} onClick={() => setSimple('two')} text='Месяц' className='statistics-button-choice'></TabbarItem>
												<TabbarItem selected={simple === 'three'} onClick={() => setSimple('three')} text='Все время' className='statistics-button-choice'></TabbarItem>
											</Tabbar>
											<div className='statistics-divshow'></div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle green'></div>
												<Title className='statistics-div-legend-title'>Хорошо</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle purple'></div>
												<Title className='statistics-div-legend-title'>Плохо</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle yellow'></div>
												<Title className='statistics-div-legend-title'>Сложно сказать</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle brown'></div>
												<Title className='statistics-div-legend-title'>Подавлен</Title>
											</div>
											<div className='statistics-div-legend'>
												<div className='statistics-div-legend-circle orange'></div>
												<Title className='statistics-div-legend-title'>Несчастен</Title>
											</div>
											<Tabbar>
												<TabbarItem onClick={() => setActivePanel("chronicle")}>
														<Icon28ListAddOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("statistics")}>
														<Icon28GraphOutline/>
												</TabbarItem>

												<TabbarItem onClick={() => setActivePanel("what is happend-1")}>
														<Icon24Add fill='white' className='mood-plus-button'/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("facts and articles")}>
														<Icon28LightbulbStarOutline/>
												</TabbarItem>
													
												<TabbarItem onClick={() => setActivePanel("settings")}>
														<Icon28SettingsOutline/>
												</TabbarItem>
											</Tabbar>
										</div>
									</Group>
								</Panel>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
