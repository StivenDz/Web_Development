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
    os.system('clear')
    if idioma == 'ESP':
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>CONFIGURNDO EL IDIOMA<-------+
                        |                                    |
                        |             CARGANDO.              |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('clear')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>CONFIGURNDO EL IDIOMA<-------+
                        |                                    |
                        |             CARGANDO..             |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('clear')
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
        os.system('clear')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>SETTING THE LANGUAGE<-------+
                        |                                    |
                        |             LOADING..              |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        os.system('clear')
        print("""\n \n \n \n \n \n \n \n \n \n
                        +------>SETTING THE LANGUAGE<-------+
                        |                                    |
                        |             LOADING...             |
                        +------------------------------------+\n \n \n""")
        time.sleep(1)
        
def Pomodoro():
    for hora in range(3):

        decHora = int(hora / 10)
        UniHora = hora % 10

        for min in range(60):

            decMin = int(min / 10)
            UniMin = min % 10

            for seg in range(60):

                decSeg = int(seg / 10)
                UniSeg = seg % 10

                os.system('clear')
                print(f'''\n \n \n \n \n \n \n \n \n \n \n \n \n
                                        {decHora}{UniHora}:{decMin}{UniMin}:{decSeg}{UniSeg}\n \n \n''')
                time.sleep(1)

def MenuESP(leave):
    idioma = 'ESP'

    if leave == '':
        os.system('clear')
        print("""\n \n \n \n \n \n \n \n \n \n
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
        os.system('clear')
        print("""\n \n \n \n \n \n \n \n \n \n
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
        os.system('clear')
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
        os.system('clear')
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
                Pomodoro()
                break

            elif opcion == 2:
                pass
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
                    os.system('clear')
                    print('\n \n \n \n \n \nMENTENTE PRODUCTIVO⭐')
                    time.sleep(1)
                    os.system('clear')
                    print('\n \n \n \n \n \nMENTENTE PRODUCTIVO⭐⭐')
                    time.sleep(1)
                    os.system('clear')
                    print('\n \n \n \n \n \nMENTENTE PRODUCTIVO⭐⭐⭐')
                    time.sleep(1)
                    break
    
                else:
                    os.system('clear')
                    print('\n \n \n \n \n \nSTAY PRODUCTIVE⭐')
                    time.sleep(1)
                    os.system('clear')
                    print('\n \n \n \n \n \nSTAY PRODUCTIVE⭐⭐')
                    time.sleep(1)
                    os.system('clear')
                    print('\n \n \n \n \n \nSTAY PRODUCTIVE⭐⭐⭐')
                    time.sleep(1)
                    break

        # if opcion != 0:            
        #     if idioma == 'ESP':
        #         MenuESP('')
        #     else:
        #         MenuENG('')
            
            
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
    MenuESP('')