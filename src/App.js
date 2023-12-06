import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Header, SimpleCell, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Spacing, Title, IconButton, Subhead, Tabbar, TabbarItem, FormItem, FormField, PanelHeaderBack, Avatar, Cell, Switch, Placeholder, Checkbox, classNames, HorizontalScroll } from '@vkontakte/vkui';
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

import {Icon36IncognitoOutline} from '@vkontakte/icons'

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
import {Icon20Check} from '@vkontakte/icons'

import {Icon24DoorArrowLeftOutline} from '@vkontakte/icons'
import {Icon24MessageArrowRightOutline} from '@vkontakte/icons'

const App = () => {
	const [activePanel, setActivePanel] = useState('start-screen');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [simple, setSimple] = useState('one');

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
		height: '98vh', 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'center', 
		flexDirection: 'column', 
		backgroundColor: '#19191a'
	}

	const CheckboxAdd = () => {
		const checkboxAdd = document.getElementById('checkbox')
		checkboxAdd.classList.add('checkbox-boxshadow')
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
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('start-2')}/>}></PanelHeader>
											<Icon36IncognitoOutline width={120} height={120}/>
											<Title className='WIS-title'>Как ты себя чувствуешь?</Title>
											<Spacing size={40}></Spacing>
											<Tabbar style={{position: 'static', minWidth: "50%", maxWidth: '75%', borderRadius:'20px'}}>
												<TabbarItem selected={simple === 'one'} onClick={() => setSimple('one')} text='Хорошо' className='WIS-button-choice'>
													😄
												</TabbarItem>
												<TabbarItem selected={simple === 'two'} onClick={() => setSimple('two')} text='Плохо' className='WIS-button-choice'>
													😔
												</TabbarItem>
											</Tabbar>
											<Spacing size={40}></Spacing>
											<IconButton className='WIS-button-save' onClick={() => setActivePanel("what is happend-2")}>
												<Icon20Check/>
												<Title style={{marginLeft: '10px'}} className='WIS-title2-screen2'>Сохранить</Title>
											</IconButton>
										</div>
									</Group>
								</Panel>
								<Panel id='what is happend-2'>
									<div style={containerStyles}>
									<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-1')}/>}></PanelHeader>
									<Icon36IncognitoOutline width={120} height={120} fill='black'/>
									<Spacing size={20}></Spacing>
									<Title className='WIS-title-screen2'>Плохо</Title>
									<Spacing size={20}></Spacing>
									<Subhead className='WIS-subtitle-screen2'>Расскажи что происходит</Subhead>
									<Spacing size={30}></Spacing>
									<div className='WIS-div-grid'>
									<IconButton id='btn1' className='WIS-iconbutton'>
												<Icon28BriefcaseOutline/>											
										</IconButton>
					
										<IconButton id='btn2' className='WIS-iconbutton'>
												<Icon28EducationOutline/>									
										</IconButton>

										<IconButton id='btn3' className='WIS-iconbutton'>
											<Icon28ArmchairOutline/>
										</IconButton>

										<IconButton id='btn4' className='WIS-iconbutton'>
											<Icon28LikeOutline/>
										</IconButton>

										<IconButton id='btn5' className='WIS-iconbutton'>
											<Icon28PlaneOutline/>
										</IconButton>

										<IconButton id='btn6' className='WIS-iconbutton'>
											<Icon28BookSpreadOutline/>
										</IconButton>

										<IconButton id='btn7' className='WIS-iconbutton'>
											<Icon28MovieReelOutline/>
										</IconButton>

										<IconButton id='btn8' className='WIS-iconbutton'>
											<Icon28MusicOutline/>
										</IconButton>

										<IconButton id='btn9' className='WIS-iconbutton'>
											<Icon28AppleOutline/>
										</IconButton>

										<IconButton id='btn10' className='WIS-iconbutton'>
											<Icon28GameOutline/>
										</IconButton>

										<IconButton id='btn11' className='WIS-iconbutton'>
											<Icon28Users3Outline/>
										</IconButton>

										<IconButton id='btn12' className='WIS-iconbutton'>
											<Icon28PaletteOutline/>
										</IconButton>
									</div>
									<FormItem htmlFor='writtingMood' top='📝 Дополнительная информация'>
										<FormField className='WIS-input'>
											<CustomInput input={input}/>
										</FormField>
									</FormItem>
									<Spacing size={40}></Spacing>
									<div className='WIS-buttons-container'>
										<IconButton style={{margin: '10px'}} className='WIS-button-save' onClick={() => setActivePanel("what is happend-3")}>
											<Icon20Check/>
											<Title style={{marginLeft: '10px'}} className='WIS-title2-screen2'>Сохранить</Title>
										</IconButton>
										<IconButton style={{margin: '10px'}} className='WIS-button-change' onClick={() => setInput("")}>
											<Icon24Add width={18} height={18}/>
											<Title style={{marginLeft: '10px'}} className='WIS-title2-screen2'>Дополнить</Title>
										</IconButton>
									</div>
									</div>
								</Panel>
								<Panel id='what is happend-3'>
									<div style={containerStyles}>
										<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-2')}/>}></PanelHeader>
										<Icon36IncognitoOutline width={120} height={120} fill='black'/>
										<Spacing size={20}></Spacing>
										<Title className='WIS-title-screen2'>Плохо</Title>
										<Spacing size={20}></Spacing>
										<Subhead className='WIS-subtitle-screen2'>Расскажи что происходит</Subhead>
										<Spacing size={30}></Spacing>
										<div className='WIS-div-grid2'>
											<div className='WIS-div-grid2-container'>
												<div id='btn1-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Усталость</Button>
												<Button className='WIS-div-grid2-button'>Волнение</Button>
												</div>
												<div id='btn2-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Уныние</Button>
												<Button className='WIS-div-grid2-button'>Грусть</Button>
												<Button className='WIS-div-grid2-button'>Досада</Button>
												</div>
												<div id='btn3-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Огорчение</Button>
												<Button className='WIS-div-grid2-button'>Упадок духа</Button>
												</div>
												<div id='btn4-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Стресс</Button>
												<Button className='WIS-div-grid2-button'>Злость</Button>
												<Button className='WIS-div-grid2-button'>Страх</Button>
												</div>
												<div id='btn5-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Нервозность</Button>
												<Button className='WIS-div-grid2-button'>Отвращение</Button>
												</div>
												<div id='btn6-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Стыд</Button>
												<Button className='WIS-div-grid2-button'>Зависть</Button>
												<Button className='WIS-div-grid2-button'>Гнев</Button>
												</div>
												<div id='btn7-grid2' className='WIS-div-grid2-container-for-buttons'>
												<Button className='WIS-div-grid2-button'>Беспокойство</Button>
												<Button className='WIS-div-grid2-button'>Ненависть</Button>
												</div>
											</div>
										</div>
										<IconButton style={{marginTop: '40px'}} className='WIS-button-save' onClick={() => setActivePanel("chronicle")}>
											<Icon20Check/>
											<Title style={{marginLeft: '10px'}} className='WIS-title2-screen2'>Сохранить</Title>
										</IconButton>
									</div>
								</Panel>
								<Panel id='settings'>
									<div style={containerStyles2}>
									<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('chronicle')}/>}></PanelHeader>
									<Spacing size={40}></Spacing>
									<Title className='settings-title'>Настройки</Title>
									<Spacing size={40}></Spacing>
										<Group style={{width: '100vw', height: '100vh', backgroundColor: '#19191a'}}>
											<Cell
												before={fetchedUser?.photo_200 ? <Avatar src={fetchedUser?.photo_200}/> : null}
												subtitle={fetchedUser?.city && fetchedUser?.city.title ? fetchedUser?.city.title : ''}
											>
												{`${fetchedUser?.first_name} ${fetchedUser?.last_name}`}
											</Cell>
											<Spacing size={20}></Spacing>
											<Group mode='plain'>
												<SimpleCell Component="label" after={<Switch defaultChecked/>}>
													Уведомления
												</SimpleCell>
											</Group>
											<Group mode='plain'>
												<SimpleCell onClick={() => setActivePanel('policy')} after={<Icon24DoorArrowLeftOutline/>}>	
													Политика конфиденциальности
												</SimpleCell>
											</Group>
											<Group mode='plain'>
												<SimpleCell onClick={() => setActivePanel('policy')} after={<Icon24MessageArrowRightOutline/>}>	
													Поделиться приложением
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
											<Group style={containerStyles2}>
												<Title className='advice-title'>Факты</Title>
												<Spacing size={40}></Spacing>
												<Button className='advice-button' onClick={() => setActivePanel("facts")}></Button>
												<Spacing size={40}></Spacing>
												<Title className='advice-title'>Статьи</Title>
												<Spacing size={40}></Spacing>
												<Button className='advice-button' onClick={() => setActivePanel("articles")}></Button>
												<Spacing size={20}></Spacing>
												<Button className='advice-button' onClick={() => setActivePanel("articles")}></Button>
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
									<Group separator='hide'>
										<div style={containerStyles}>
											<PanelHeader separator={false} style={{width: '100vw'}} before={<PanelHeaderBack onClick={() => setActivePanel('what is happend-3')}/>}></PanelHeader>
											<Spacing size={15}></Spacing>
											<Title className='chronicle-title'>Хроника</Title>
											<Spacing size={40}></Spacing>
											<Group separator='hide'>
													<div className='chronicle-bigdiv-container'>
														<Group>
															<div className='chronicle-div-container'>
																<div className='chronicle-div-date'>6 декабря</div>
																<div className='chronicle-div-entry'>
																	<div className='chronicle-div-emoji emoji-1'></div>
																	<Title className='chronicle-div-title'>Хорошо</Title>
																	<Subhead className='chronicle-div-subtitle'>Описание радостей и новых возможностей в жизни</Subhead>
																</div>
															</div>
														</Group>
														
														<Group>
															<div className='chronicle-div-container'>
																<div className='chronicle-div-date'>1 декабря</div>
																<div className='chronicle-div-entry'>
																	<div className='chronicle-div-emoji emoji-2'></div>
																	<Title className='chronicle-div-title'>Плохо</Title>
																	<Subhead className='chronicle-div-subtitle'>Описание суровой действительности и тяжелой жизни</Subhead>
																</div>
															</div>
														</Group>														
														
														<Group>
															<div className='chronicle-div-container'>
																<div className='chronicle-div-date'>27 ноября</div>
																<div className='chronicle-div-entry'>
																	<div className='chronicle-div-emoji emoji-3'></div>
																	<Title className='chronicle-div-title'>Тяжело сказать</Title>
																	<Subhead className='chronicle-div-subtitle'>Описание неясности всей произодшей ситуации</Subhead>
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
									</Group>
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
