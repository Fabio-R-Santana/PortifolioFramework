<?php
namespace App\controllers;

use App\Framework\Controller;
use App\Framework\Routes as Routes;

/**
 * @Routes\Root("/")
 */
class PortifolioController extends Controller{

    
    public function __construct(){

    }

    /**
     * @Routes\Get("/index")
     */
    public function paginaInicial(){
        $this->view->setBlock("conteudoBloco", "index");
        $this->view->renderContent("template")->render();
    }

    /**
     * @Routes\Post("/process")
     */
    public function processarForm(){
        echo "Hello World Index";
    }
}