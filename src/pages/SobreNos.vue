<template>
  <q-page class="about" >
    <div class="page-header">
      <Header about></Header>
      <div class="content">
        <div>
          <header class="title"><h5 style="margin-block-end: 0.2em; margin-block-start: 0;">Sobre o projecto</h5></header>
          <p style="top: -3rem;">A <b style="font-size: bold;">Mobility4Healthcare</b> é uma plataforma criada pelo movimento tech4COVID19 que pretende disponibilizar aos profissionais de saúde alternativas de transporte privado.</p>
          <p>É especialmente direcionada aos profissionais de saúde que pretendem não utilizar a viatura própria e/ou o transporte público, de forma a reduzir o risco de contágio e a fadiga pessoal.</p>
          <p>Para que se desloque com segurança durante a pandemia, são disponibilizados ofertas e descontos de operadores privados.</p>
        </div>
      </div>
    </div>
    <div class="who-we-are" style="overflow: hidden;">
      <header class="title" style="width: 100%; max-width: 1000px;"><h5 style="padding: 1em 0 0 0; margin-block-end: 0.2em; margin-block-start: 0;">Quem somos</h5></header>
      <ul class="grid">
        <li class="volunteer" v-for="(item, index) in volunteers" :key="index">
          <span class="avatar"><LazyImg v-if="item.avatar" :src="`/statics/avatars/${item.avatar}`" alt="foto" :thumb="item.thumb" /></span>
          <div class="details">
            <span class="name" style="padding-top: 1em;">{{ item.name }}</span>
            <span class="role">{{ item.role }}</span>
          </div>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import Header from '../components/Header'
import LazyImg from '../components/LazyImg'

export default {
  name: 'PageSobreNos',
  data () {
    return {
      volunteers: [
        { avatar: 'Antonio.png', name: 'António Caeiro', role: 'Founder', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACzVBMVEUAAACCf3bHyMe2tLLi2cWWkY6jpqZycGyyu7zRvZx1kZSVk457eHWqkG3Cl4Fnen16dnNxcnNgYF+baFa2v8B2c3CosLKVkY2DgH1xb29cZ2lmZGKYdV+KYFGntbZ+lJWVj4uUj4p2cmqTf2PAyMnHyMe+pIB7d3SSeGJcZGbi07V1kJONjouXgmLBp4NZW1zn28LrzL3px7iDjI5xio2VkYxvhomRjIZlbG2ueGJeX2BXWVpHRURmTEN9UUJXPzb24dfz28/t1cju0cOwubu0uLjWvrWssLC6tKqoq6rgvKfZxKWnpqXfs6PZt6DZspqamZjVspd7k5Z6kJJ4jI+Qjox6iouGiIrOoYmLi4l2hYeMiYWij4JvdXauh3KrfXC+gW9qbW1wbGqxfme0eGdfZGVrZmKlcl+WdV2Gc1mSZlhrXFeFXU9yWEd5VUd+U0dyTT5FQD5dSThiQTQxMTNROTE0Lyw5KCMlIiPq4s/q38rpz8LUzsDuyL/ny76xvL7h1L3i17ymtLXLvLOnsbPAvbLnw7Djv7Dlvq/cya6+s62wrqyrrKuYqKqrq6nSuKiVo6TWqaCjoZ7RvpzXrpygnpyFmZzDqZrNqJrNqZPXppOAk5GGj5CZlI+xnY2OjYzSo4vSo4rLnIfTmYV/hINsgILMm4G6mYDBlX+Hgn6vin2GgX3Lj3yliXh+fXi/kXe3jXaCdnVsc3S2gnJ0c3GnhXC7hW+2fm+sj22zgm26emyLcmxsaGliZ2iRgWeEeGWpcGWMb2Odg2KqZGKhYmGWgGBlYl+KcF2eal2BZ1xuZVyPeVqebldSVVdzZFaca1WLb1OeYVJ/WVJtWU6SYk1+YE1fVEyPYEtOTEp/X0eIWkeEVkOCTkNxR0JqTEBpSz91Tz1vSz1dQzppQjpRPDY1MzNTOjBFNC9PNy5WNC1CLCksJyhHLiQsJCQVEhPnhIC9AAAAL3RSTlMACAjnl1tVVefn5+fn5+Hh4eHh4eDgsLCwsLCwsLCXl5eXl5dcXFxcXFtVVVVVCJk1QxEAAAGMSURBVBjTYgADJhUxkZZIUQlVJgY4YOOoN7YpKbRJC2Vmg4nJuRg/LXtdUfGuzNzTXBEiJt/rcvZt+ZPntvdLS8LNTRVAYtpBTe7Zbm51fv7L0u1vTOoL0GFgYOQKmuMe4+DgZOi10DLPxidgPjMTg6aZSYhrjKOjoVHbguScwpVTe7pZGaTMZoe5znOqbvedEpf38NlJU9O54gz8JsHGPtMP2tstSn9sa2eXtTo6UoDBzGSaRVj/zPjNHSkp2yzzd8fG7k0CjCEqZMKSpc3ORoa1uxIWJ+Rv3JSqv4VB0CrRIrjL2ch34oGLa7ZnR1lYWwsxSFpbhXt6eM2acenVy4Ksa+tS9fWlGVij9yS2Nmy1vXvk8J3i0qJzx6z01RkYuUNrKjuv5kbEn7C8V16UeSqJh5GBgd3DoMp7+eW1q3IevSnIzdyfxg7yPIuBgXec33H7F8W3Hlw4vU8JEkwsjZMzAv3Xn7ly/eaho8qwANXizNgQGJF8/vYOXl1E0DNqyPKt2Ckso6YH5gIANFeLM6sDzecAAAAASUVORK5CYII=' },
        { avatar: 'Filipa.png', name: 'Filipa Pereira', role: 'Head of Project Management', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACJVBMVEUAAADN293R4OLH1dbR3+LQ3uDJ19jQ3+LI1NbF09TR3+LF09TQ3+LL19fE0tPG1dbD0tK5xMOqq6igpaTIy8jO3N/M2du/yczFyMOYmJWFeW1PSEK+ys21vr2enZp8fXrQ3uDN2tzE09PDz9DR3+LD0dIvIRogFBDP3N7F09TBzs69yMmwubi9lXREMSg+LSQrHBYlGRWiqKWNj4xhWlSJZVFWTkV6VkNGNi0gGBUTDAqyurqusKzQtJmdnpjRrJOZmpPMpIfInYa4l4LHnIG+kHp5eHS6kHO+j3O4hnO1jHKaeHC5j22ve221i2yvgmqmfmWebmOoe1+IYV+HZ1ybc1dpXlVnWE6DYE2GZExdUktxUEF8WUBWRjxRQztuSzhNOC1DLCE3KCA5Jx0pGBIYDw3L2NnJ1ta/ysu4xcS4w8G0wMC8wr+6v72yvbuttLGnsrCnr66nrKzMrZOUlJHJpIudk4vPp4nGoYO/nYO4j4PFoYCDg3/Amn2pg3vCjnazjnawina7h3Szg3Fzc3GFe3C6km+fhG+zh210c21ub2y1eWu2g2irgGemc2aJbWasfGWsgmOWc2NoY2CKal5zZ11kYl2heFyQcFt9ZFthX1qRZViaXVV0X1SVbFODYlBrVUx/YElzUENdSkNXSkBoSDxHPzxYQjtXQjpPQDdPPDJcOCw1LyxOLyVLMSJILSI8KSAxJh81JR0qIRonHxokHRoQCwr3r0PoAAAAIHRSTlMACOeXW1Xk4eHhsLCXXFxV5+fn5+GwsLCwl5eXXFVVVQv+V6AAAAF6SURBVBjTYgADRhZRTm1tNjFeRgY4YGXKqNFL1p9WqMzGDxPjUdCOikvQUzNc05mvxAwTU5ycZLFq/eq16pvNdDTBoqwqCjpJahvMvTx6oi03Gisp8QPtYFLRMFbbFO9e7OLhrbfFTVlVgJGBRUVBMcog0c/W1rGiccVWN2VlVT4GLgUNLX21yIAIf6/5IYstW5RVVbkZ2BU0rBPNa00XuTsvXb4gtUtLVYmTAajbSD3A0d6+3KnZM2TbrGxlJU3AGBQUFEss20ud6l0DA337rcwKtDQ1gdoVjQ2XNUzw754TPHumuplRphIH0CJFG32DGbqeVXXBk2LVVhrlaXEDnaSROzVlYYdLU5/3XEO9WDsdbT6g4xVzwtUjJ/a6+k7RN7AIc9ARZAR606bVIjVGN2ieaXSywZIwhyxZkOelElKsYtp0p5uarzOMC7eDBpO0lXqoj09QaES8iYmJJCxA5YUqq3X9nMuKrIXlEEHPyCshkp7GIS4DiQ4Ao0xdxNl+d0QAAAAASUVORK5CYII=' },
        { avatar: 'Filipa-2.png', name: 'Filipa Bento', role: 'Head of Other Mobility Operators', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACfFBMVEUAAAC7x8fK09PK09O6xcXAysq/yckrLzC7xsbL1NS/yckcICTM1NTCzMy6xcWsuLhFUlQdJy0PEhSzv7+Yp6fMk3a7iG7M1dXJ0tK0wMCOn5+geGa8g2DM1NTL1NQjIiMJDxKQoaGndFEWGh2vuro3TFkuMzAgJivM1NS8xsYlIiIdISC+ycgxMzQoKSgnJSQcHh4bGxvJ09PDzc64w8ONnZ6IkpJaZWaJWUY9RUQuLi8jKi8yMC4pLCwjJiYjIyQZGhoVFxcUFBQOEBAMCwu6xcW1wcCyvr6ntLSPoKDQpI/HmYPFlYC+knzAjXxzfHtga2y5h2rAfmOLb19RXF68eVqqdlq0cVVHUE+tbkuJXkmdXEaGWj1eRjw9Ozs1OzpvRjFmPy5gPSxaOSk8LSceJCUhIyIhIB4aFxcGBwfG0NDFz8/AysqtubmptLOjsLCerKyfq6qSo6PRraCVoJ+HmJnRnZbYnJXZopSEkI96jI3ImoyAjIzPn4vQlYvDm4nRmYd1hoe+iIa4i4PMloK+lYHOmIDChX/LkH1xe3vSjHqphXrGknfMj3a+iXZrdnbLj3WxiHO7hnGne2+Wem+dfW68cm2rgmy4cmrFhWnDi2i9fWi0g2asfmSAbWRTY2SccGNaY2KrdGCyfFuhbVqbbVpKWVqAY1ekYlOobFKca1G4blBzWk+PYU0/TE2HYUyPXUqiZUacY0WUZERoUESTS0GKT0A6Pz+ZWj6AUzyPVztzTzotOTomMTpmRzgvNThwSDdGPzd4TjZcQjYoLjQ7NTNVOC1HNCxBMio2LydYNCZaNiM4KiNBKSBNMB8eHRwzIxsyHxQlGBIdEAt9gpZ3AAAAKHRSTlMACONb4LCXl1xVVVXn5+fn5+fn4eHh4bCwsLCwsJeXl5dcXFxVVQgI5C1EsQAAAYZJREFUGNNiAANGZlYWTRMWVg5GBjjgZNKptLS0jCjR4eWCickZuZlrG548aJ3mr5nDBhGTNdJcqHciKmzVAQdtMx0dsCinhnGNttXSlglB4ccN4j00NbmAdvBouEZoH65u6J0ZmuBoEODuysfIwKyhUbjdJjh4weyglTvTbfeYuptwMIhrZHfqas1bs2F50qnEMw6pVQVukgxMGnnxdilrlyxqtrBIPGZru8zTQ5hBw8hMTy/Fr8+vfEX0rtNO9tqNRbmAMWhkmevqJ/t01LVvWx2adN7FMcQ0n4HJOGS/zT7vSU0zondEnnN2cp5vKsIgYexvbx9bX1s2bevGyIuZmXbmnlIMzCZmcVoZU4orusI3HXIxcNFfV6rIwMgfEKelf3Zq92SL5Mt2Nul6ugLAoFLpt9IyjJ3eOjEq4VLaUS19Q26Q59l1j1hv8fWdG7Y5w8nQwVEeEkzse613e3n7BMZcsDJIVYAFqKpgzKwerzmL1zsLcSOCXk1JRrQtUExaWR3MBQD5c3NUfU7yQAAAAABJRU5ErkJggg==' },
        { avatar: 'Fabio.png', name: 'Fábio Alves', role: 'Head of Mobility', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAB6VBMVEX////8/PxRVlxtdXliaG1dYmhOU1kZGip+hop8hIhqcHVnbXLc3d7Aw8Srq62LkZR7g4d5gYV1en9yeX5tc3dVWmBMT1U/PEcVFCrW1teusbOGio25koh2foJvdntscHaTeHKSd3Fka3BfZWpcXGN4ZmJKTlRPQUIgIS8dHy8WFS4SESgTEyXY2drT1NXT09TQ0NHfwsLgv77et7PYsLHXrqvQrKjOpaTLnqTHoJ6YmJvXpZm+mpbMnZGoi5G1lYqchomBhol9hom3jYKrioB1fICXgn+Td3yhgnuWfHmCdnmKdneYfHRsYmZaX2RXXWJUVFtITFJdTk5BRkxEQEo9QUg0OEAwMDkWGSjZ2tvfysvfw8jUvL/XtrrfubfVsrXTs7TPq7HIrLCrra+nqavGp6rTpKjIpabGpaaho6XHpaTOp6K1naLUqKDQo6C7n5/Lo524k53XppzTm5y4mZqxmZmnkpnHl5iPlZjVoJbJn5aylZW8i5WpkZPFmo+hi4yAgYyhiYuwj4WXhoWVg4WMgYF5eoGOfoCEfH6ih31vdnyHeXtzdnuTf3pzcHebfXaeeXJ3cHJqa3KNc3GYd299bm5tZ2lgX2lyZWhXWV5oWFljVVZZUVZZUFRGQ1BHPUVLP0M8OUEoKzUfU90IAAABcklEQVQY0z3Rw3oDARiF4X+UUdrYdpuktm23UW3btm27V9p5kjbf8t2cxYFgSEyvRirVqGMQCMcX6HFULkfNoiX+v0XQEkKhUPgVdpYuiPgzSsR4Pjyfja/WWkxIBZVPCSU1xmqTdqPIuGUoKaT43IaAovXGopysrOWc4gsDphMKEGgWFtLiu5WUxISkGW3lDXOi06lALaJFkoqppITEjnHt3oGZwSRqEIhLxNj9aldL20L+pem0FjczGtBjmNTwUJmfOjpXVnxV8Syrs7DAsCyLH633ZEy0d2aUV8l5qIyAAhzHieuh5MXZ5Na02xoOUTH0WSxEnXUyNX0gbTDb1mTncBhiCUJm9+4fluXmbu+++xp4PDQWkDNZg5/83lzrTh95cpA/TTwpAqDyRgXc7rfs6ZT5l0YyOsqnAq5IMuB2OUr7x6qqSQ4jAYKqdDkdx6bynS+XMpqzUHH1TqctL8+mVNbHQTgkPvPxvNSaGR+64xcxLUhOSjY7ZgAAAABJRU5ErkJggg==' },
        { avatar: 'Hugo.png', name: 'Hugo Delgado', role: 'Head of Development', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACYVBMVEUAAAClrq6osK6vt7WirKywuLZwcG+rtLOxubWstLGnsLCrs7CrtLKnsK6Ul5Onr66krayiq6ufp6V8dGtpZF+ujHx3WkylrKuCY1ZYVFObpKKPmJd3Zk8/OjaqtLSutrOiq6pzfH2kra2ttransLCttbGwuLWutrOosK2iqqmpsrKqsq+psK6mr62lrKqgqadnZWCrs7ClrauampWzjHGAVTamr6+rsq6dpqWco6GYoaGho6COmJjpvpbrvJPetJGLjorZrYjgsYKAhILJn4HirH7Lon2yjXviqHenh3dxcm9vcGzJlGi0g2FsZFyTaVm+glhoWEiyc0FwVUFOSEFeSz5WSD51UzlZQjiGVTd0TjVlTDRzRDNHOjJHNCpUNSRpPyNUMx6vuLertLSsr6yrramgp6WfpqO5raHsxKCSnJvqwJnmt5OKkY7rvIzitovhsImDionntojktIjYp4i8noTRqYHVp4HaqX+Ph3+WiX7BlX3OoHm1lnm/lnaPgXZ3eXbBjnXepnPQm3Oqg3LKnHHClnDYnm65j26if26efGx7dGzDkGuwh2vRlmrioGmudWiaeWZrambem2WRdmWbdmOEbmLGkGCrfmCNcWB/amDVlF7Bil65h16uhF5eX1yRcFudd1qXc1pZXFqNbVaFZ1aTb1VjXFWddFR6X1KUbFCMalBbVlCfc0+EYE+FXUmYZUeQYUZ0WUZpVEVrUERQS0OUZkJvT0J9U0CFXT95Uj94ST9qTj1tRD16WDxPQjeeZDZAOjY2MzFySi9ZOy5SOy57SypROClqQSQwKCE4Kx5mxwmAAAAAInRSTlMAsFyXlwkI5+Th4bBbVVUI5+fn5+fh4eCwsJeXXFxVVVVVHeFnRwAAAYNJREFUGNNiAAN+JkZxPSNORiZ+BjjgFVByWB6y1cAhjV0eJsaipO8dGh4dfepkSK4qM0xM0yt4rk/bvJ3bTNdoqoNFFZT0jA+1NrnaVvi095umq6vxMjCwCmpqNoQ55dnZFbt6TA5yVlPlYGVgUlLSM9jv5mSbmV3kMTtokoaOKg8Do5KKjnesi1ttqX2+4/QD8zXM1bkZuMx0U6durgsMi1i04mjcicVG5mocDCoquimNS2pmztresTbiSIKftqq6GmAMSmZaGvYm5WUmPQVzNkYeqzTSNjRk4FLRUsnwdHEsac7pCwiINNZQVeNkYFTR0tI2Numd4Vvta7qhSlNfW5WbgUclWdnQesrCfev3xsdHWerqaagzMbCyKycp69QvWDXBPybKz0JfX1eIjYFBTllZ2Xna0tX+u2MOG1hYWVnygTzPrKxjsHJi8LI94YlxhTZZUtBgsu7e5N615XhiQqyXjTQsQPmEAzvdW3bsCj0ooogIejYZCVHPdWKSsmxgLgDVyGka8udp2AAAAABJRU5ErkJggg==' },
        { avatar: 'Joana.png', name: 'Joana Pereira', role: 'Head of UX/UI', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACf1BMVEUAAADv9PXu8vTw9PXq7e3w9PXs8PHu8/Tv9PXt8vLu8/S7z9Pq7/DH19upwMVKKyNXIiLA0ta5ztKyd1uuJivB09e1y9CgZkyoFiTl7e7c5+l0c3FWOzlQNjEyHRmMXkqQGyHE1dmyyM3p8PHQ3uHDv8Ckub5aMi02Hhx0TDuQGiTt8fPw9PXu8/Q7NDLo7fDi6Om+0dW6hmkiFxXs8PDq7vCxx8zYpIjVoIR1dXWvgGSobVGLYEttT0NHPzyPUDY4MC89JR8pHBjR1da7ztK1ys+txMi8wcKaqKmfpaXPmoPLmHy7knt9enq9imtwbWvDiWq0hGq5g2O6fWK1fWGreV+id1+ydFqucFamblRRTlGlaU6aaE6qbE1gT0qTXEeAWkdRQTxDOTZNOjNfPjJNNS1uQCtCMSgsKCgrISA5JB9EIh4nHh0vHhoeFRPn6urc3+PT4OLV3+HH19vC09fI09a3zdHMzs7Ex8fBxca6xMarwMTCv8GqvL65vbymtri2s7WhrrCWo6SSnZ+Yn56bnZzWqZberpXYqpXGo5XUoY/Zpo6Ojo3OoIrInYqFhoSIg4SVhoPAloJ+f3/IjH7OlH3Sm3yahXrJlHXKknS+jXHBiHDHkW/FkG+Id2+7cW27hGm3hGWqfmR2ZmS9hWOqe2NvZ2KScmGwdl+Gb156aF2ZcFysdluncVtaWVuhcFhpXVdjVlWYalSQZlSvaVOzdFKba1KfXlJ0YlGdaVB+XlBtXk9nVEmcXUajXkOPVz2CTzmpRjltSDhoSDiDTTVZPTJbOTFfOio7LSpDLSlGMCg4LCg1KyhGJyR/KyNTLiByGRw2HxtMHhsuGBgoFxT0qcrCAAAAK3RSTlMACOfh4LCwl1xcVQnn5+fn5+Hh4eGwsLCwl5eXl5eXXFxbW1VVVVVVVQgI+kAhGwAAAYNJREFUGNNiAANGTjYW03wWNk5GBjhQ5tF3t7T0t6wwYeKCiUnqG/Q4ZCQ5ZOjVmWizQ8SkDAxa9Y5uMwpclKBXDhVVKSyq1DsdEzJnmrm5ra+pti7QBG7e4tLJZ1LWBM20MG+3SnLW1mZiZFAsMayyy7TZvGu1d0enj4OntrYuB4OooUvzidQw2zjbpT575kVFGWjrsjIIurg2HbMJ3WSTEBq4avo6O3dtXWYGwzIzj5T1RivWxi/w6u2z03PW1tUBjMHQ1c1jZZhRcPje8KldbTlA63V0GITMqlt2Hw6JsLae3W0xKXOCvrYOM4OYWW1/ulNkbPz2+VNmLM/ZWKCtw8qg5FbvvyPvQHSkdYCFlXFyYoO+DgcDN1/jsvS8NPvoCC/vU06JyYtrgI5nUPPckGt83t5+X7BRlnHWybiJqiDPSzvmGmfvj90a4Hf84mXHVFlIMMk5XXE8ErRkrlXapeyzMrAA1eA/FOM3a+HOcxcE1BFBrykvLrzloIiEghaYCwDfrnXETUkY+wAAAABJRU5ErkJggg==' },
        { avatar: 'Ruben.png', name: 'Rúben Martins', role: 'Head of Creativity, Branding & Design', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACo1BMVEUAAADn6emNiHz6+fj4+Pj19vbN09N8iYv6+vpwfnzj5ubU2dmuppOGlJN4g4WZb1/BycmwubimsrKWo6SRiYSKZ1/w8fLn5+Xz9PTw8vLHzs25w8OeqKWGlJWAd22LamTr7OuDkpN/jo5we3iWdmiVgGCNaF+Yo5/r7e3g4+Obc2TAv7yhq6iCkY/39/bt7e3i5OTEzMzAyMi6w8O4wcKns7OiraueqKaVoZ6QnZuIlpeGlZaEk5OXi4mPgYGjeWo1NjUVGhz6+vnx8O7Y29nT2NjW1tXP1NTK0dHHzs++x8ayvLuqtbWlr6/FuamXo6KanZ+GlZJ7iIqYhIWWkISKfoJxfoCaf31xe3ipgHWkgHWefnOtgHKlfXF8bnCbeW9+cW+oeW5+amZ9bmRuZmCXaF6RZ1yJY1Z6XlZeV1J/WUptT0R2TDthRTdbQjQpMTQuMjMmMDNUPDFDNDAxLiwwKSdLMSbz8u/n6enf4uLa3d7Y2NXg18bQy8O7xMPBw73Kx7u7ube3tbXQxrS/ubLXxq29tKu2savSv6WdoqS5raCwqJ2aoZ2Wl5qhlJiqmpeLmJexpJWvmpWrlJOxmJK8qJG8mpGUi5GOmY+mko+QkY9+j4yxlIp8jIp5jYZ3hIaGgYauioWhk4SEhYR2goR0hYOnh4GBg4GqmnyVhnyUfHlpeHmigniVe3hseHiTiHVmdHRucHR+enKjdmyjdWuQcGt5bWmddmiidGh0Z2ZeZWaKbWOhc2Kbcl92Y1yDZ1qUZ1iLZFdwUlZRUVaSZ1RoVVRdVFOHYFGSYU9uV01xVU2EWkx4S0xYTktQTEp6U0l6WkiEWEdoUEN9U0FmSUBNREBqSz5NQz5tST1LQT1YQDdLPTM7MC8fIyUaICIlGhQeFxG9281hAAAAK3RSTlMACAiX51xbWFVV5+fn5+fn4eHh4eHh4OCwsLCwsLCwsJeXl5eXXFxbVVVVZ3efdgAAAYhJREFUGNNiAANGVklxNwMxCVZGBjjgYNFvz8wvXOymx8IBE2N2cl5U4OjoeLdAW8+JGSqmV+53Lv9eaWlJSWG1vrMCSExDv8JlYueCnfH221c5BFRVGmgC7eAycKnt6rULj7K3X3Zzl6e7KzcjA5uru1FDR0BwcHhs7JrrDsaGnh5sDFIehsb1NRsT1m7NOGVn69BobGIizSBg6OXd1nK1OOlg0a2s/t3TfExNhRiMjExMtZtC42wT01J3TIleaGZmpgMYg1edt6+29vTQvsgtiTFz4idZWJibMwj6+Or0NNvFHT2fujkmepPuBEt/YQYZHR1zy9Zth+8UXzm+d3/EXF0rK1kGdX8Ly8CpKccOnbmRe+HS8rD5QUHsDEy8NoG6IckJZ7OP5Obl2a4OW8LHxMDAbmNtZROSkpl9rajs4syIDes4QZ5XtLbWXbr+9oP7ZTknoibPUoYEk9LseTP8kk/mXD59YE+kCixAOXlWdK/cl5WensavhQh6JlU5kaQMUXk1JjAXAD/gf+t3lggfAAAAAElFTkSuQmCC' },
        { avatar: 'Pedro.png', name: 'Pedro Martins', role: 'Head of Backend Development', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACUlBMVEUAAACXoJ6WoJ2Bj4yRm5mQnJmbo6GTnpyCp7+MlpOgp6SmqqeZn5xvfXstQ1QULUegpaOdoqCNmZZ0YlAkO1CUoJ6jpqSPm5giOk88OTKVr8CmqaaTmph3hoRVc4cpQlimqqeGlJJEZoNJX29gb24fQ2EvSFxtenmRnZqeo6GcoZ+Yn5yOlpRreXdsd3ZmdnWlqaegpaOboJ6WnJqVm5mPm5iHlJGBjYvesIh5h4V0gH5jdHNdZGB2Vz9zTjtdSzhjTDdSRzdWPy1AOStOOypCNShHNSYwJhtxkqajp6WgpKKXop+Kl5SLkox9iondrIXaqoJzg4LXpn5ufXzVmXO9lXF0eHGqi2zJkWtzbWeWfGK1hWFaWFKSZ1CVbU9vX0yPaEsgNEV7W0RqV0F6VD1DQztmTjlcRjRSQzJOPi0zMi1JOiw/NShANCc9MSQ9LyQ4LCEnIBkSFhmGqL15m66XpKaTnpuRnZt6jpiSmpeQmJV9kJSFko+AjYpzhYreqIC7m4DPpH98gn1acn3DoXxddHxyfXvLnHnFmXe2kHTRm3PCl3Nnc3HIlnCGfHBLYG9lbmzDkGtKYGuMe2q9jmhYZGarfGVQYWVCWGV9cmR3bmF5aGCJcF9YXV13Z1xfYVykc1qhc1lKVFc8S1d+bVaDbFaab1MtQlNMUVKHbVGAZU8+Sk18YEuEZEpeVUl0UEeDX0RxW0RyWUNiT0NQT0NmVEJPTUKAWUFRSD5wUTtvUTpxSzlLQjlCPjNFOS8uLisvKyMwKiIlIhwfHBsfGBQHCw6VqMwZAAAAJ3RSTlMACFzlVeSwsJeXW+fn5+fn4eHh4eHgsLCwsJeXl5dcXFVVVVVVCAiaUe8/AAABg0lEQVQY02IAA0YmdlbTclE2LkYGOFDhLbNqCptv42vJrAgT41RX940Kj1qZlpOlFygLEZPRUddt6A5v6Y22d98fbM4JEmMx0VEPC6i3CAqJWOte2GamwQK0gwco2OdvYdEVEb2p8MiEGh9WRgYmI2Md3Zkd7aGhU+JcDhyyMa/VYGJgM9Ku0kt1XVOQ65Rge3BfpJWlNzuDoJZ2pd66VQFJ2U5xSW52s9UtNYQYNLWMTPQ6/UMagyYm2KbsjtT10/YBjMFLU8tYd860BXYLl22w3R7bo2+uYcYgYKiprR6zJ98102HXzpR5+vpmpswMYp6GWuo2m9fHOqQ7pNnFWOtreIszcBl4aqpbbcvZaO/q4pS+wjrYFOgkRm4DQ79FW+KXFOS7ubjXTbUOZAYGlYKB19yiotS9eXlumYer+ytKWUCelzZOzjrq7JiRYZ+7elJJsRQkmDg8djg7O25Ndpw+I9GDAxagSvyLs+OXzmpdnsinjAh6VTlJ4cnNIhLyamAuAM0pbNn+fggqAAAAAElFTkSuQmCC' },
        { avatar: 'Diego.png', name: 'Diego Pereira', role: 'Backend Development Specialist', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACN1BMVEUAAAC4w8WIl5i0vLyWo6OwubizvLybpqm1vb22vr6Wo6Nwe3nH3eJrfH13gHqyu7ups7Kcp6ePnZ15Yk1OQDOkrayJk5LAx8eeqamcp6d5iotydHdpXVTGzMustrWstLKOnJtxgYJicHLFzMutvsZvgIGWo6Pf+PzByMeXo6OmsLCgrKw/MCWttrairKuapqaUoaBzhIXKpX9YRDMtKiUzJh22vr2jra2cp6aQnp6Jl5iCjIt4iIl1hodwgYJERUFWRjhhSDVsTDRmSDRgRTJWQC5LOSpINylCMykvJBwgHholHxiyu7uvuLiqtLOosrGnraufqqqNmpmNl5aDk5OPlJDVroiDh4TOpoPGoYNxgoJtfoB6fnq/mXjFnXdldXavlXR0dXC1kG6rjm1lbWxtbWiedlePb1eXc1VrYFKEZk58YEqJYURnVkJ4Vj1TQzdKPzNTQDFOPjFAOC5WOytGMic4KiAoJB4sIRoaGRQeGBPZ4eLK1dy7w8LBwb2jqKWZpaWdpKCSnJuOm5uTmpmanJinn5PYs5GIjo9/jo+Gj42Kj4zIp4l8iIiIi4ePi4F2gYB0gH/OpX1+gnxpenvFoHqpj3eojXfDoHaKgXO1lXKcg3Crj26Mf22dgmaHeGa0imViZ2Ssg2OPeF6ofVyKclqMbll7aldXWldzZVGIZ09dV06BYktpUUlwW0h3YEZsUjpRRzc/PDc6NzJfRC8xMi9dQS1PNSg3MShJNCQ6LCEzKCAZFxPgtlsRAAAAKXRSTlMACAjn57CXXFtVVVXn5+fh4eHh4eHg4LCwsLCwsJeXl5eXl1xcXFtVVRFAwZkAAAGDSURBVBjTYgADRg5W0ZZwMQl2JgY44GQOiLE38d6aEsTCBROTM2vdZOJVuafSyz5YUxYixqYbsNlTx8PUu6rKa4VBLRtYr49/qOe0nti0PJftpibBZmYaQDuYfbW6c8PC4pbk5G0pLO/y0WVmZODw1dXqWzwpbkFajtM2VxNrbXNdZQZWP3/z8GQjo6RFGVmOrsXW+vpa4gwCWnp6/QlL3YxXZbuXFRVYG2hq8zNometZTJ+1wUMnvaSiwj0/1cpS0w8wBm29QM3ZRpHL0iOdd7q5Gid2hoQEMghqW2i2GU2NbY9wcnZ2NE60MbQVYpDUtmhoTJ4RkbSmxMXJcXWvbbSdFIOavqZm88w5Ccs9PEtdilJsbKdEqzIwsRgYWIWuzHRYW2qqYx9lYxjPCwwqLktLq/q5Gx0Kykx3LzQ0jIrnBnleIaipbt764h3l3jqpE+zslCDBJF9dMz9jnfsuHYeYyRMVYQGqztORnWXsVpipzwfWC40Odhnh3HwRaRVIdAAAJt5rGtdDrqkAAAAASUVORK5CYII=' },
        { avatar: 'Ana.png', name: 'Ana Henriques', role: 'Communication & Design Specialist', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACZFBMVEUAAADK2dzD09fB09eptbfd5ujJ2Ny8y8/X4eTC09fM294XDAna5ObR3uE0JCMYDw7E1dm8z9Oif3dbMCXJ19ne5+nU4ONONzQhCAS4zNCxxMkiGBYjExHc5efD0dU3JyvI2Nu5zdHY4uXT3+KFkJE5Q0coGRoXDA3c5efZ4+UfEA3G1trF1NjC1NgYDQkYCgcqHh0jFRMgERAcEAzF0dS90NS2yc27x8nnvrTmuK6GYFEzLy82KCwzJiYtJCQxIyEmGhkUCAjW4eTU3+LR2t28ys3n0szmy8K1wMKwurvlxbfgv7PTu7KhqKzRs6mboKDXq57UqJniqpe+nJLLn450dnVpbG6Vc2ekcWKLbGGOaVx9YVdQUFBURUBbQjo7OTlLODc7MDVPMy1AKykyJSMXBwPe5+nU3uDR3eDK2d3K2dzI0tXDz9LDz9G6zdG5yc21xsrk0ci/xcjrz8flzcfmz8a8xMSwwMPvycHuxL3Zwr3jx7zpxLvwwrfrv7XXu7PpwbLfva7Is6uXpKbYsqXVsqTZr6TDrqTnsKPWsqDGppyUmpzXnpuZmpjck5iunZa6oJXEoZPMp5KIkJGulo3Xho3Dmoy5moyQjYyylYu9loh3hYfap4bgoIakjYKBhIKKgoDaln+4jX+XhH7Tfn3PmHymh3yshnzMkXpzenrPfXiVe3OUeXNqcXOgeXDJhm+ugG2Jc2yWdWt4bWtaZWuGcmlWYGRrYmCYa11fXF2wdVmPZ1N6WUleTkk9P0VeSEFFPjtBNztOPTlJNzM/LCs5JSkuJyg0Hh9IKB4mIB4uGBlDIBjRB+RQAAAAKHRSTlMACOdV5OGwsJeXXFjn5+fn4eHh4eCwsLCwl5eXl1xcXFtbVVVVVQgIq+VmSQAAAYNJREFUGNNiAANGOXYWT3MRNi5GBjhgZvIIs06M787O4FWGiXHqeMTYOTgYHFtr4uTEARXTNVlpZ2BzKPmI/TYXTU2wKLOOtqe1wd7+pgnTw219NTQ1lYB2MGmbzE853F5YWu09KW6LpoYGDyODgrZ22QH7OB83N3evzqh9LhoaGrIMbNo6/rb2W32qStyDl687WAQUFGUQ0MkJTXHYONPKzysiMiLZV1NTg5VBV9c83sAwMnxHa8OKkMDosHRNjTTAGEx1m+2MjOY1etfUzq2zWLYz11lTg0HQbLKhkdbi4gpLy4UdFqu3m2c5szKwF4RqaRnG1ltUWgYFBURvdtXNFGNQLI/RMzbWn9LS07dkfUjSAldTHS4GRhZrPT09/djggKmrllolzcg3ZQIGlcpJfS1jPf2oaW2Bu4/v7zXLYwZ5XlrLUMtRf8/ERVanEhP8zSQhwSRjZOyYemJW15qjNrazpWABys3vmHp6g9+mBBs+VUTQq3NLCO+aIyQurwbmAgDMfWz6z4QdeQAAAABJRU5ErkJggg==' },
        { avatar: 'Diana.png', name: 'Diana Guerra', role: 'Copywriter Specialist', thumb: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACB1BMVEX////I09XK1NfG0NTH0dS5wcT9/f3u8fKkrK+iqq3i5+nb4ePQ2dyxur1VRD0oICAhGxvEz9G/yc21vsG0vL+vt7ulrrGdpqmMal5SQTqDVDiAUDRdQjJIOjE1KyhFMCcxJyUmISMhICErISAbGh38+/vv8vPR1tjf2NbI0dPBy8+8xsm6xMeutriqsraosbSvra2gqKubo6aVnJ+YmZiGiYhqcndnbnFoY2BbXV11YFauelWdbFN1XlFvV1CYaE9+V01pUUuUZEqYY0pbUEp1VkhBRUZjTEVQR0KRX0E8Pj90UDxHQDwwMzyOWjppSDV2TTR2SzJpRjExLjBDLycuJSMqJSPp7Ozo6uvl5+jY2NjM1NfV1NTN0dTQ0NDBycu3wMPBurastLOep6mfpae7pp2Ok5N8g4Z4foFxd3eNdnJxcW+gfW2Ac2yIcmhmZ2ZtamWvfmJ9a2JfYGCkdF+TZF+qdl52Z16GZl6EZV6SbV2se1t+YlqHYVptXVmXbVdZV1eLZlZgWVZSVFSBXVGHYVClb06WYE16WkxHSkupbkpUTUpNS0qNXkmla0hhUEifbkd/W0ZMRUZIREaUX0WHWkRqT0OdY0I3O0JWSkGGWD9CPT9zUT1eSD0/Oj1gSDw8NjkoLzhLPTRDMixaPCs5LytcPSpMMiYwJSAxIyA5KB8kHh8VFR02LuAwAAABd0lEQVQY0z3QU5MDQRSG4e6emczMxraztm17w7Vt27Zte3/kplJJ3rvz3JyqD7hikEwWHoSYJAN482MhTBoX3xkMWaTHfBAUxOWVPl/F8yH08RjCuk6fOJyH0ijoVj8EYetuSe76WtptYiCEOOn8wUKQP3QtX5yRJeUUheI4VssAJEKo5VB+n3u8nJ920h2EYxgJmDjGj+Go7y6KUzLzF/IETmQCQsxm98pfs7JShmXzPatEcIggENDhFL3yYkueyM7OyJhLlIZLKBpII+noHLt25yx9cyozdTBKQknCgCiS6uDotQeF52Pj0yOjdGiYmAD+QlHsu+FXcZk8my7r3xaGiJr8QbU4ukRv+rOVHW3sbxUUsQmCqAKMtj2H3mAyWZQVKrXaSgmJRudUNQU6ncPAeysrVD1qrAmx7ErgLEJn5HK5PwpzuepLkzRZD4BLjTye3fihrLBoNanNwF3dEo/7/WlWKooHAoA334aYhPKbvvYAX9f5DwRXTESHjk8GAAAAAElFTkSuQmCC' }
      ]
    }
  },
  components: {
    Header,
    LazyImg
  },
  meta: {
    title: 'Sobre nós - mob4h'
  }
}
</script>
<style lang="scss">
  .q-page.about {
    overflow-x: hidden;
  }
  .q-page.about h5 {
    font-weight: bolder;
  }
  .q-page .page-header {
    background: $secondary;
    padding-bottom: 3rem;
  }
  .q-page.about header {
    color: #2F80ED;
  }
  .q-page.about p {
    font-size: 1.12rem;
    line-height: 175.1%;
  }
  .q-page.about .who-we-are {
    background: $support-background;
    text-align: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .q-page.about .grid {
    display: grid;
    grid-gap: 3rem 0;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    width: 100%;
    max-width: 57rem;
    margin: 3rem 2rem;
  }
  .q-page.about .content {
    padding: 0 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 30rem;
  }
  .q-page.about .content > div {
    max-width: 60%;
    margin-left: 5rem;
  }
  .q-page.about p {
    margin: 1rem 0 !important
  }
  .q-page.about .volunteer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  .q-page.about .volunteer .avatar {
    border-radius: 50%;
    display: block;
    width: 120px;
    height: 119px;
    background: $info;
    color: black;
  }
  .q-page.about .volunteer .avatar img {
    width: 120px;
    height: 119px;
  }
  .q-page.about .volunteer .name {
    font-weight: bold;
  }
  .q-page.about .volunteer .name,
  .q-page.about .volunteer .role {
    display: block;
    color: black;
  }
  @media (max-width: $breakpoint-sm-max) {
    .q-page.about .grid {
      padding: 0;
      margin: 3rem 0;
    }
    .q-page.about .content > div {
      max-width: 100%;
      margin-left: 0;
    }
  }
</style>
