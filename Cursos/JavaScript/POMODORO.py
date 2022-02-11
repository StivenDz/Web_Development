from colorama import Back, Fore, init
init()
import os
import time


# umil = numero / 1000
# tmp = numero % 1000

# centenas = tmp / 100
# tmp = tmp % 100

# decenas = tmp / 10
# unidades = tmp % 10

# numero = 123
# cen = int(numero / 100)
# print(cen)

def CambiarIdioma(idioma):
    os.system('cls')
    if idioma == 'ESP':
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>CONFIGURNDO EL IDIOMA<-------+
                        |                                    |
                        |             CARGANDO.              |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('cls')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>CONFIGURNDO EL IDIOMA<-------+
                        |                                    |
                        |             CARGANDO..             |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('cls')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>CONFIGURNDO EL IDIOMA<-------+
                        |                                    |
                        |             CARGANDO...            |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
    else:
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>SETTING THE LANGUAGE<-------+
                        |                                    |
                        |             LOADING.               |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('cls')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>SETTING THE LANGUAGE<-------+
                        |                                    |
                        |             LOADING..              |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('cls')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>SETTING THE LANGUAGE<-------+
                        |                                    |
                        |             LOADING...             |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        
def Pomodoro(h, idioma):
    ciclo = 0
    horasHechas = ['','','','','','']

    if h == 'predeterminado':
        for hora in range(2):

            decHora = int(hora / 10)
            UniHora = hora % 10

            for min in range(60):

                decMin = int(min / 10)
                UniMin = min % 10

                for seg in range(60):

                    decSeg = int(seg / 10)
                    UniSeg = seg % 10

                    os.system('cls')
                    Books(2)
                    if (min == 25 or min == 26 or min == 27 or min == 28 or min == 29 or (min == 30 and seg == 0) or min == 55 or min == 56 or min == 57 or min == 58 or min == 59):
                        print(Fore.LIGHTBLUE_EX + f'''\n \n \n
                        {decHora}{UniHora}:{decMin}{UniMin}:{decSeg}{UniSeg}\n \n \n''')
                        if idioma == 'ESP':
                            print(Fore.LIGHTBLUE_EX + 'Tiempo de Descanso')
                        else:
                            print(Fore.LIGHTBLUE_EX + 'Break Time')
                        if (min == 30 and seg == 0) or (min == 59 and seg == 59): 
                            ciclo+=1
                            if idioma == 'ESP':
                                print(Fore.GREEN + f'Pomodoro #{ciclo} Completado')
                                input(Fore.GREEN + 'Presiona enter para continuar... ')
                            else:
                                print(Fore.GREEN + f'Pomodoro #{ciclo} Completed')
                                input(Fore.GREEN + 'Press enter to continue... ')
                    else:
                        print(Fore.GREEN + f'''\n \n \n
                        {decHora}{UniHora}:{decMin}{UniMin}:{decSeg}{UniSeg}\n \n \n''')

                    horasHechas[0] = decHora
                    horasHechas[1] = UniHora
                    horasHechas[2] = decMin
                    horasHechas[3] = UniMin
                    horasHechas[4] = decSeg
                    horasHechas[5] = UniSeg
                    time.sleep(1)
        
        if idioma == 'ESP':
            print(Fore.WHITE + '\nTecnica del Pomodoro realizada con exito\nEspero que hayas aprendido mucho!')
            print(Fore.LIGHTBLUE_EX + f'''\n \n \n
                    Tiempo {horasHechas[0]}{horasHechas[1]}:{horasHechas[2]}{horasHechas[3]}:{horasHechas[4]}{horasHechas[5]}\n \n \n''')
        else:
            print(Fore.WHITE + '\nSuccessful Pomodoro Technique\nI hope you have learned a lot!')
            print(Fore.LIGHTBLUE_EX + f'''\n \n \n
                    Time {horasHechas[0]}{horasHechas[1]}:{horasHechas[2]}{horasHechas[3]}:{horasHechas[4]}{horasHechas[5]}\n \n \n''')

    else:
        for hora in range(h):

            decHora = int(hora / 10)
            UniHora = hora % 10

            for min in range(60):

                decMin = int(min / 10)
                UniMin = min % 10

                for seg in range(60):

                    decSeg = int(seg / 10)
                    UniSeg = seg % 10

                    os.system('cls')
                    Books(2)
                    if (min == 25 or min == 26 or min == 27 or min == 28 or min == 29 or (min == 30 and seg == 0) or min == 55 or min == 56 or min == 57 or min == 58 or min == 59):
                        print(Fore.LIGHTBLUE_EX + f'''\n \n \n
                        {decHora}{UniHora}:{decMin}{UniMin}:{decSeg}{UniSeg}\n \n \n''')
                        if idioma == 'ESP':
                            print(Fore.LIGHTBLUE_EX + 'Tiempo de Descanso')
                        else:
                            print(Fore.LIGHTBLUE_EX + 'Break Time')
                        if (min == 30 and seg == 0) or (min == 59 and seg == 59): 
                            ciclo+=1
                            if idioma == 'ESP':
                                print(Fore.GREEN + f'Pomodoro #{ciclo} Completado')
                                input(Fore.GREEN + 'Presiona enter para continuar... ')
                            else:
                                print(Fore.GREEN + f'Pomodoro #{ciclo} Completed')
                                input(Fore.GREEN + 'Press enter to continue... ')
                    else:
                        print(Fore.GREEN + f'''\n \n \n
                        {decHora}{UniHora}:{decMin}{UniMin}:{decSeg}{UniSeg}\n \n \n''')
                    
                    horasHechas[0] = decHora
                    horasHechas[1] = UniHora
                    horasHechas[2] = decMin
                    horasHechas[3] = UniMin
                    horasHechas[4] = decSeg
                    horasHechas[5] = UniSeg
                    time.sleep(1)
        
        if idioma == 'ESP':
            print(Fore.WHITE + '\nTecnica del Pomodoro realizada con exito\nEspero que hayas aprendido mucho!')
            print(Fore.LIGHTBLUE_EX + f'''\n \n \n
                    Tiempo {horasHechas[0]}{horasHechas[1]}:{horasHechas[2]}{horasHechas[3]}:{horasHechas[4]}{horasHechas[5]}\n \n \n''')
        else:
            print(Fore.WHITE + '\nSuccessful Pomodoro Technique\nI hope you have learned a lot!')
            print(Fore.LIGHTBLUE_EX + f'''\n \n \n
                    Time {horasHechas[0]}{horasHechas[1]}:{horasHechas[2]}{horasHechas[3]}:{horasHechas[4]}{horasHechas[5]}\n \n \n''')

def Books(opcion):
    books = ['''
    
              .--.           .---.        .-.
              |C#|           | N |        |P|
         .----|--|   .-.     | O |  .---. |Y|    .--.
      .--|====|==|---|_|--.__| D |--|:::| |T|-==-|==|---.
      |%%| JS |  |===| |~~|%%| E |--|   |_|H|JAVA|  |___|-.
      |  |    |  |===| |==|  | J |  |:::|=|O|    |DB|---|=|
      |  |    |  |   |_|__|  | S |__|   | |N|    |  |___| |
      |~~|====|--|===|~|~~|%%|~~~|--|:::|=|~|----|==|---|=|
      ^--^----'--^---^-^--^--^---'--^---^-^-^-==-^--^---^-'

    ''', '''
    

          __...--~~~~~-._   _.-~~~~~--...__
        //               `V'               \\ 
       //                 |                 \\ 
      //__...--~~~~~~-._  |  _.-~~~~~~--...__\\ 
     //__.....----~~~~._\ | /_.~~~~----.....__\\
    ====================\\|//====================
                        `---`
    
    ''','''
    
   ____________________________________________________
  |____________________________________________________|
  | __     __   ____   ___ ||  ____    ____     _  __  |
  ||  |__ |--|_| || |_|   |||_|**|*|__|+|+||___| ||  | |
  ||==|^^||--| |=||=| |=*=||| |~~|~|  |=|=|| | |~||==| |
  ||  |##||  | | || | |JRO|||-|  | |==|+|+||-|-|~||__| |
  ||__|__||__|_|_||_|_|___|||_|__|_|__|_|_||_|_|_||__|_|
  ||_______________________||__________________________|
  | _____________________  ||      __   __  _  __    _ |
  ||=|=|=|=|=|=|=|=|=|=|=| __..\/ |  |_|  ||#||==|  / /|
  || | | | | | | | | | | |/\ \  \\|++|=|  || ||==| / / |
  ||_|_|_|_|_|_|_|_|_|_|_/_/\_.___\__|_|__||_||__|/_/__|
  |____________________ /\~()/()~//\ __________________|
  | __   __    _  _     \_  (_ .  _/ _    ___     _____|
  ||~~|_|..|__| || |_ _   \ //\\ /  |=|__|~|~|___| | | |
  ||--|+|^^|==|1||2| | |__/\ __ /\__| |==|x|x|+|+|=|=|=|
  ||__|_|__|__|_||_|_| /  \ \  / /  \_|__|_|_|_|_|_|_|_|
  |_________________ _/    \/\/\/    \_ _______________|
  | _____   _   __  |/      \../      \|  __   __   ___|
  ||_____|_| |_|##|_||   |   \/ __|   ||_|==|_|++|_|-|||
  ||______||=|#|--| |\   \   o    /   /| |  |~|  | | |||
  ||______||_|_|__|_|_\   \  o   /   /_|_|__|_|__|_|_|||
  |_________ __________\___\____/___/___________ ______|
  |__    _  /    ________     ______           /| _ _ _|
  |\ \  |=|/   //    /| //   /  /  / |        / ||%|%|%|
  | \/\ |*/  .//____//.//   /__/__/ (_)      /  ||=|=|=|
__|  \/\|/   /(____|/ //                    /  /||~|~|~|__
  |___\_/   /________//   ________         /  / ||_|_|_|
  |___ /   (|________/   |\_______\       /  /| |______|
      /                  \|________)     /  / | |
    
    ''']

    if opcion == 1:
        print(Fore.WHITE + books[0])
    elif opcion == 2:
        print(Fore.WHITE + books[1])
    else:
        print(Fore.WHITE + books[2])

def MenuESP(leave):
    idioma = 'ESP'

    if leave == '':
        os.system('cls')
        Books(1)
        print("""\n \n
            +----------->BIENVENIDO<-------------+
            |                                    |
            |1. INICIAR POMODORO PREDETERMINADO  |
            |2. CONFIGURAR POMODORO              |
            |3. CAMBIAR IDIOMA                   |
            |4. ¿QUE ES LA TECNICA POMODORO?     |
            |0. SALIR                            |
            +------------------------------------+\n \n \n""")
        Options(idioma)

def MenuENG(leave):
    idioma = 'ENG'
    
    if leave == '':
        os.system('cls')
        Books(1)
        print("""\n \n
            +------------>WELCOME<---------------+
            |                                    |
            |1. START DEFAULT POMODORO           |
            |2. SET POMODORO                     |
            |3. CHANGE LANGUAGE                  |
            |4. WHAT IS POMODORO TECHNIQUE?      |
            |0. LEAVE                            |
            +------------------------------------+\n \n \n""")
        Options(idioma)

def definicion(idioma):
    if idioma == 'ESP':
        os.system('cls')
        print('''
        La técnica Pomodoro consiste en usar un temporizador para dividir el trabajo en bloques de tiempo enfocados
        (generalmente 25 minutos) separados por un breve descanso, generalmente de cinco minutos.

        Después de cuatro bloques de tiempo de trabajo consecutivos, se toma un descanso más largo, alrededor de 20 o 30 minutos.

        Cada bloque de trabajo de 25 minutos se llama “pomodoro”.
        Si sientes la necesidad de hacer algo diferente al trabajo durante un período de concentración, anótalo.
        Con el tiempo, te entrenarás para ser más productivo durante cada pomodoro.

        Los beneficios de la técnica Pomodoro provienen de los descansos frecuentes, que ayudan a que tu mente se mantenga fresca.
        Los bloqueos de tiempo enfocados también te obligan a cumplir con límites fijos,
        por lo que te animará a completar una tarea más rápidamente o, en el caso de una tarea grande, extenderla en varios pomodoros.

        Este método Pomodoro es útil en casos de teletrabajo.

        La duración del trabajo y los tiempos de descanso pueden variar según lo que prefieras, pero este es el proceso básico:

        1- Comienza un temporizador de 25 minutos
        2- Trabaja hasta que suene el temporizador
        3- Tómate un breve descanso de cinco minutos

        4- Cada cuatro pomodoros (períodos de enfoque), toma un descanso más largo, generalmente de 20 a 30 minutos
        Debido a que toda la técnica se centra en cronometrar tus períodos de enfoque y descansos,
        es útil confiar en una aplicación de temporizador.
        
        ''')
        time.sleep(5)
        input('Presiona Enter Para Volver Al Menu... ')
    else:
        os.system('cls')
        print('''
        The Pomodoro technique involves using a timer to break down work into focused blocks of time.
        (usually 25 minutes) separated by a short break, usually five minutes.

        After four consecutive blocks of work time, he takes a longer break, about 20 or 30 minutes.

        Each 25-minute block of work is called a "pomodoro."
        If you feel the need to do something other than work during a focus period, write it down.
        Over time, you will train yourself to be more productive during each pomodoro.

        The benefits of the Pomodoro Technique come from frequent breaks, which help your mind stay fresh.
        Focused time locks also force you to adhere to fixed limits,
        so it will encourage you to complete a task more quickly or, in the case of a large task, spread it out over several pomodoros.

        This Pomodoro method is useful in cases of telecommuting.

        Work duration and break times can vary depending on your preference, but here's the basic process:

        1- Start a 25 minute timer
        2- Work until the timer rings
        3- Take a short break of five minutes

        4- Every four pomodoros (focus periods), take a longer break, usually 20-30 minutes
        Because the entire technique is centered around timing your focus periods and breaks,
        it is useful to rely on a timer app.

        ''')
        time.sleep(5)
        input('Press Enter To Return To Menu... ')

def Options(idioma):

    if idioma == 'ESP':
        opcion = int(input("Digite una opción del menu: "))
    else:
        opcion = int(input("Enter a menu option: "))
        

    if opcion == 1 or opcion == 2 or opcion == 3 or opcion == 4 or opcion == 0:
        while True:
            if opcion == 1:
                Pomodoro('predeterminado',idioma)
                break

            elif opcion == 2:
                if idioma == 'ESP':
                    while (True):
                        try:
                            horas = int(input(Fore.WHITE + '-Ingrese la cantidad de horas que desea estudiar: '))
                            while horas < 1 or horas > 6:
                                if horas < 1:
                                    print(Fore.RED + '\n-Debes ingresar al menos 1 Hora')
                                elif horas > 6:
                                    print(Fore.RED + '\n-Solo puedes Ingresar maximo 6 horas, ya que no es saludable mas de 6 :)')
                                time.sleep(1)
                                horas = int(input(Fore.WHITE + '-Ingrese la cantidad de horas que desea estudiar: '))
                            break
                        except(ValueError):
                            print(Fore.RED + '\n-Debes ingresar solo numeros enteros')
                            time.sleep(1)
                else:
                    while (True):
                        try:
                            horas = int(input(Fore.WHITE + '-Enter the number of hours you want to study: '))
                            while horas < 1 or horas > 6:
                                if horas < 1:
                                    print(Fore.RED + '\n-You must enter at least 1 Hour')
                                elif horas > 6:
                                    print(Fore.RED + '\n-You can only enter a maximum of 6 hours, since this is not healthy for more than 6 :)')
                                time.sleep(1)
                                horas = int(input(Fore.WHITE + '-Enter the number of hours you want to study: '))
                            break
                        except(ValueError):
                            print(Fore.RED + '\n-You must enter only whole numbers')
                            time.sleep(1)
                Pomodoro(horas,idioma)
                break

            elif opcion == 3:
                if idioma == 'ESP':
                    CambiarIdioma(idioma)
                    MenuENG('')
                    break
                else:
                    CambiarIdioma(idioma)
                    MenuESP('')
                    break
            elif opcion == 4:
                definicion(idioma)
                if idioma == 'ESP':
                    MenuESP('')
                else:
                    MenuENG('')
                break

            else:
                if idioma == 'ESP':
                    os.system('cls')
                    print('\n \n \n \n \n \nMENTENTE PRODUCTIVO⭐')
                    time.sleep(1)
                    os.system('cls')
                    print('\n \n \n \n \n \nMENTENTE PRODUCTIVO⭐⭐')
                    time.sleep(1)
                    os.system('cls')
                    print('\n \n \n \n \n \nMENTENTE PRODUCTIVO⭐⭐⭐')
                    Books(3)
                    time.sleep(2)
                    break
    
                else:
                    os.system('cls')
                    print('\n \n \n \n \n \nSTAY PRODUCTIVE⭐')
                    time.sleep(1)
                    os.system('cls')
                    print('\n \n \n \n \n \nSTAY PRODUCTIVE⭐⭐')
                    time.sleep(1)
                    os.system('cls')
                    print('\n \n \n \n \n \nSTAY PRODUCTIVE⭐⭐⭐')
                    Books(3)
                    time.sleep(2)
                    break
            
    else:
        if idioma == 'ESP':
            print('''\n-Opcion Invalida!  ❌''')
            time.sleep(2)
            MenuESP('')
        else:
            print('''\n-Invalid Option!  ❌''')
            time.sleep(2)
            MenuENG('')
        
if __name__ == '__main__':
    try:
        MenuESP('')
    except(KeyboardInterrupt):
        os.system('cls')
        print('\n \n \n \n \n \n⭐⭐⭐⭐⭐')
        Books(3)
        time.sleep(2)
    