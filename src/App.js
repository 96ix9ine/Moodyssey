import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Button, Separator, Spacing, Title, IconButton, Subhead, Image, Epic, Tabbar, TabbarItem, FormLayout, FormItem, Input, FormField } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/icons'
import './styles/Mood.css';
import './styles/StartScreen.css';
import './styles/What is happend.css'

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

const App = () => {
	const [activePanel, setActivePanel] = useState('start-screen');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const [simple, setSimple] = useState('one');
	const [text, setText] = useState('one');

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
			setPopout(null);
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
											<Title className='question'>Твое настроение</Title>
											<Spacing size={40}></Spacing>
											<Group separator='hide'>
												<div className='mood'></div>
											</Group>
											<Spacing size={100}></Spacing>
											<Epic>
												<Tabbar>
													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28ListAddOutline/>
														</IconButton>
													</TabbarItem>

													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28GraphOutline/>
														</IconButton>
													</TabbarItem>

													<TabbarItem>
														<IconButton className='mood-plus-button'
														onClick={() => setActivePanel("what is happend-1")}>
															<Icon24Add/>
														</IconButton>
													</TabbarItem>
													
													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28LightbulbStarOutline/>
														</IconButton>
													</TabbarItem>
													
													<TabbarItem>
														<IconButton
														onClick={() => setActivePanel("#")}>
															<Icon28SettingsOutline/>
														</IconButton>
													</TabbarItem>
												</Tabbar>
											</Epic>
										</div>
									</Group>
								</Panel>
								<Panel id='what is happend-1'>
									<Group separator='hide'>
										<div style={containerStyles} className='what-is-happend'>
											<Icon36IncognitoOutline width={120} height={120}/>
											<Title className='WIS-title'>Как ты?</Title>
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
										<IconButton style={{marginTop: '40px'}} className='WIS-button-save' onClick={() => setActivePanel("what is happend-3")}>
											<Icon20Check/>
											<Title style={{marginLeft: '10px'}} className='WIS-title2-screen2'>Сохранить</Title>
										</IconButton>
									</div>
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
